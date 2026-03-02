# API仕様書

## 概要

- ベースURL: `http://localhost:8000/api/v1`（ローカル開発時）
- Content-Type: `application/json`
- 認証: なし（初期スコープ）

---

## 共通エラーレスポンス

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Article not found"
  }
}
```

| ステータス | code | 発生条件 |
|----------|------|---------|
| 400 | `VALIDATION_ERROR` | パラメータが不正 |
| 404 | `NOT_FOUND` | リソースが存在しない |
| 422 | `UNPROCESSABLE_ENTITY` | リクエストボディのバリデーションエラー |
| 500 | `INTERNAL_SERVER_ERROR` | サーバ内部エラー |

---

## エンドポイント一覧

| メソッド | パス | 概要 |
|--------|------|------|
| POST | `/api/v1/articles` | Article登録 |
| GET | `/api/v1/articles` | Article一覧 |
| GET | `/api/v1/articles/{id}` | Article詳細 |
| GET | `/api/v1/articles/{id}/generation-status` | 生成進捗確認 |
| GET | `/api/v1/questions` | 問題一覧 |
| GET | `/api/v1/questions/{id}` | 問題詳細 |
| POST | `/api/v1/questions/{id}/answer` | 解答送信・正誤判定 |

---

## Article管理

### POST /articles

Article登録。登録と同時にBackend内でSentence分割とGenerationJob作成を行う。

**リクエスト**

```json
{
  "title": "Understanding Latency in Distributed Systems",
  "body": "Latency is the time delay between a request and a response. In distributed systems, latency can accumulate across multiple network hops."
}
```

| フィールド | 型 | 必須 | 制約 |
|----------|-----|------|------|
| `title` | string | yes | 1〜500文字 |
| `body` | string | yes | 1文字以上 |

**レスポンス: 201 Created**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Understanding Latency in Distributed Systems",
  "body": "Latency is the time delay between a request and a response. In distributed systems, latency can accumulate across multiple network hops.",
  "sentence_count": 2,
  "generation_job_id": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  "created_at": "2026-03-02T10:00:00Z"
}
```

**エラー**

| ステータス | code | 条件 |
|----------|------|------|
| 422 | `UNPROCESSABLE_ENTITY` | title/bodyが空または文字数超過 |

---

### GET /articles

Article一覧。作成日時の降順で返す。

**クエリパラメータ**

| パラメータ | 型 | デフォルト | 制約 |
|----------|-----|---------|------|
| `limit` | integer | 20 | 1〜100 |
| `offset` | integer | 0 | 0以上 |

**レスポンス: 200 OK**

```json
{
  "total": 42,
  "limit": 20,
  "offset": 0,
  "items": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Understanding Latency in Distributed Systems",
      "url": "https://example.com/latency-article",
      "sentence_count": 2,
      "generation_status_summary": {
        "pending": 0,
        "completed": 2,
        "failed": 0
      },
      "created_at": "2026-03-02T10:00:00Z"
    }
  ]
}
```

`generation_status_summary` はそのArticle配下のSentenceの状態集計。

**エラー**

| ステータス | code | 条件 |
|----------|------|------|
| 400 | `VALIDATION_ERROR` | limit/offsetが範囲外 |

---

### GET /articles/{id}

Article詳細。配下のSentence一覧と各Sentenceの生成状況を含む。

**レスポンス: 200 OK**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Understanding Latency in Distributed Systems",
  "url": "https://example.com/latency-article",
  "body": "Latency is the time delay between a request and a response. In distributed systems, latency can accumulate across multiple network hops.",
  "created_at": "2026-03-02T10:00:00Z",
  "sentences": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "body": "Latency is the time delay between a request and a response.",
      "position": 0,
      "generation_status": "completed",
      "question_count": 2
    },
    {
      "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "body": "In distributed systems, latency can accumulate across multiple network hops.",
      "position": 1,
      "generation_status": "pending",
      "question_count": 0
    }
  ]
}
```

**エラー**

| ステータス | code | 条件 |
|----------|------|------|
| 404 | `NOT_FOUND` | 指定IDのArticleが存在しない |

---

### GET /articles/{id}/generation-status

指定ArticleのQuestion生成進捗。FEがポーリングで利用することを想定。

**レスポンス: 200 OK**

```json
{
  "article_id": "550e8400-e29b-41d4-a716-446655440000",
  "job": {
    "id": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    "status": "in_progress",
    "total_sentences": 2,
    "processed_sentences": 1,
    "progress_percent": 50,
    "started_at": "2026-03-02T10:01:00Z",
    "completed_at": null,
    "error_message": null
  },
  "sentences": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "position": 0,
      "generation_status": "completed",
      "question_count": 2
    },
    {
      "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "position": 1,
      "generation_status": "pending",
      "question_count": 0
    }
  ]
}
```

`job.status` の値: `pending` / `in_progress` / `completed` / `failed`

`job.progress_percent` = `processed_sentences / total_sentences * 100` の整数値

**エラー**

| ステータス | code | 条件 |
|----------|------|------|
| 404 | `NOT_FOUND` | 指定IDのArticleが存在しない |

---

## Question取得

### GET /questions

問題一覧。クエリパラメータで絞り込み可能。

**クエリパラメータ**

| パラメータ | 型 | 必須 | デフォルト | 説明 |
|----------|-----|------|---------|------|
| `article_id` | string (UUID) | no | なし | 指定ArticleのQuestionに絞り込む |
| `type` | string | no | なし | `vocabulary` または `fill_in_the_blank` |
| `limit` | integer | no | 20 | 1〜100 |
| `offset` | integer | no | 0 | 0以上 |

**レスポンス: 200 OK**

```json
{
  "total": 10,
  "limit": 20,
  "offset": 0,
  "items": [
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "sentence_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "type": "vocabulary",
      "question_text": "Latency is the time ___ between a request and a response.",
      "correct_answer": "遅延",
      "explanation": "「latency」は「遅延」を意味し、リクエストとレスポンスの間の時間差を指す。",
      "details": {
        "target_word": "delay",
        "choices": ["遅延", "帯域幅", "スループット", "冗長性"]
      },
      "source": {
        "title": "Understanding Latency in Distributed Systems",
        "url": "https://example.com/latency-article"
      },
      "created_at": "2026-03-02T10:05:00Z"
    },
    {
      "id": "d4e5f6a7-b8c9-0123-defa-234567890123",
      "sentence_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "type": "fill_in_the_blank",
      "question_text": "In distributed systems, ___ can accumulate across multiple network hops.",
      "correct_answer": "latency",
      "explanation": "「latency」は分散システムにおいてネットワークホップをまたいで蓄積する遅延時間のこと。",
      "details": {
        "target_word": "latency"
      },
      "source": {
        "title": "Understanding Latency in Distributed Systems",
        "url": "https://example.com/latency-article"
      },
      "created_at": "2026-03-02T10:05:00Z"
    }
  ]
}
```

#### detailsフィールドの構造

**vocabulary（単語問題）**

| フィールド | 説明 |
|----------|------|
| `target_word` | 問われる単語（Sentenceの該当語）|
| `choices` | 選択肢4つ（正解を含む） |

`question_text` は `target_word` を `___` に置換した文。`correct_answer` は正解の日本語訳。

**fill_in_the_blank（穴埋め問題）**

| フィールド | 説明 |
|----------|------|
| `target_word` | 空欄にした元の英単語 |

`question_text` はAIが生成した穴埋め文（`___` で空欄）。`correct_answer` は元の英単語。

**sourceフィールド**

| フィールド | 説明 |
|----------|------|
| `source.title` | 出典記事のタイトル |
| `source.url` | 出典記事のURL（Crawlerが取得したもの。nullの場合あり） |

**エラー**

| ステータス | code | 条件 |
|----------|------|------|
| 400 | `VALIDATION_ERROR` | typeの値が不正、limit/offsetが範囲外 |
| 404 | `NOT_FOUND` | article_idが指定されているが存在しない |

---

### GET /questions/{id}

問題詳細。

**レスポンス: 200 OK**

```json
{
  "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
  "sentence_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "type": "vocabulary",
  "question_text": "Latency is the time ___ between a request and a response.",
  "correct_answer": "遅延",
  "explanation": "「latency」は「遅延」を意味し、リクエストとレスポンスの間の時間差を指す。",
  "details": {
    "target_word": "delay",
    "choices": ["遅延", "帯域幅", "スループット", "冗長性"]
  },
  "source": {
    "title": "Understanding Latency in Distributed Systems",
    "url": "https://example.com/latency-article"
  },
  "created_at": "2026-03-02T10:05:00Z"
}
```

**エラー**

| ステータス | code | 条件 |
|----------|------|------|
| 404 | `NOT_FOUND` | 指定IDのQuestionが存在しない |

---

## 解答判定

### POST /questions/{id}/answer

解答を送信し、正誤判定を返す。解答履歴の永続化は行わない（ステートレス）。

**リクエスト**

```json
{
  "answer": "遅延"
}
```

| フィールド | 型 | 必須 | 説明 |
|----------|-----|------|------|
| `answer` | string | yes | ユーザーの解答 |

**正誤判定ロジック**

- `answer` と `correct_answer` を文字列比較
- 大文字/小文字を区別しない
- 前後の空白はtrimして比較

**レスポンス: 200 OK**

```json
{
  "question_id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
  "is_correct": true,
  "correct_answer": "遅延",
  "explanation": "「latency」は「遅延」を意味し、リクエストとレスポンスの間の時間差を指す。"
}
```

`correct_answer` と `explanation` は正誤に関わらず常に返す。

**エラー**

| ステータス | code | 条件 |
|----------|------|------|
| 400 | `VALIDATION_ERROR` | answerが空文字 |
| 404 | `NOT_FOUND` | 指定IDのQuestionが存在しない |
