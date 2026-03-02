import type { Question } from '@/types/question'

export const mockQuestions: Question[] = [
  // --- vocabulary (10問): 英単語→日本語訳4択 ---
  {
    id: 'v-001',
    sentence_id: 's-001',
    type: 'vocabulary',
    question_text: 'latency',
    correct_answer: '遅延',
    explanation:
      '"Latency" は「遅延」を意味し、リクエストを送信してからレスポンスを受信するまでの時間差を指す。分散システムの性能評価において重要な指標。',
    details: {
      target_word: 'latency',
      choices: ['遅延', '帯域幅', 'スループット', 'ジッター'],
    },
    source: {
      title: 'Understanding Latency in Distributed Systems',
      url: 'https://example.com/latency-distributed-systems',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-002',
    sentence_id: 's-002',
    type: 'vocabulary',
    question_text: 'circuit breaker',
    correct_answer: 'サーキットブレーカー（障害の連鎖を防ぐ設計パターン）',
    explanation:
      '"Circuit breaker"（サーキットブレーカー）は障害の連鎖を防ぐ設計パターン。故障したサービスへのリクエストを一時的に遮断し、システム全体の安定性を保つ。',
    details: {
      target_word: 'circuit breaker',
      choices: ['サーキットブレーカー（障害の連鎖を防ぐ設計パターン）', 'ロードバランサー', 'APIゲートウェイ', 'サービスメッシュ'],
    },
    source: {
      title: 'Resilience Patterns for Microservices',
      url: 'https://example.com/resilience-patterns',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-003',
    sentence_id: 's-003',
    type: 'vocabulary',
    question_text: 'scalability',
    correct_answer: 'スケーラビリティ（負荷増加に対応する能力）',
    explanation:
      '"Scalability"（スケーラビリティ）はシステムの負荷増加に対応する能力。水平スケーリング（サーバ増設）と垂直スケーリング（サーバ増強）の2種類がある。',
    details: {
      target_word: 'scalability',
      choices: ['スケーラビリティ（負荷増加に対応する能力）', '可用性', '耐久性', '信頼性'],
    },
    source: {
      title: 'Scaling Web Applications',
      url: 'https://example.com/scaling-web-apps',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-004',
    sentence_id: 's-004',
    type: 'vocabulary',
    question_text: 'idempotent',
    correct_answer: '冪等（何度実行しても結果が同じ）',
    explanation:
      '"Idempotent"（冪等）は、同じ操作を何度実行しても結果が変わらない性質。HTTPのGET・PUT・DELETEは冪等だが、POSTは通常冪等ではない。',
    details: {
      target_word: 'idempotent',
      choices: ['冪等（何度実行しても結果が同じ）', '原子性', '一貫性', '永続性'],
    },
    source: {
      title: 'RESTful API Design Best Practices',
      url: 'https://example.com/rest-api-design',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-005',
    sentence_id: 's-005',
    type: 'vocabulary',
    question_text: 'sharding',
    correct_answer: 'シャーディング（データを複数DBに分割する手法）',
    explanation:
      '"Sharding"（シャーディング）はデータを複数のデータベースに分割して管理する水平分割の手法。単一DBのボトルネックを解消し、大規模データに対応できる。',
    details: {
      target_word: 'sharding',
      choices: ['シャーディング（データを複数DBに分割する手法）', 'レプリケーション', 'パーティショニング', 'キャッシング'],
    },
    source: {
      title: 'Database Scalability Techniques',
      url: 'https://example.com/db-scalability',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-006',
    sentence_id: 's-006',
    type: 'vocabulary',
    question_text: 'deadlock',
    correct_answer: 'デッドロック（処理が互いに待ち合う膠着状態）',
    explanation:
      '"Deadlock"（デッドロック）は複数のプロセスが互いのリソース解放を待ち合い、処理が進まなくなる状態。予防・検知・回復の3つのアプローチで対策する。',
    details: {
      target_word: 'deadlock',
      choices: ['デッドロック（処理が互いに待ち合う膠着状態）', 'ライブロック', 'スターベーション', 'レースコンディション'],
    },
    source: {
      title: 'Concurrency and Synchronization',
      url: 'https://example.com/concurrency-sync',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-007',
    sentence_id: 's-007',
    type: 'vocabulary',
    question_text: 'eventual consistency',
    correct_answer: '結果整合性（最終的に全ノードが同じ状態になる）',
    explanation:
      '"Eventual consistency"（結果整合性）は分散システムにおいて、更新後しばらくすると全ノードが同じデータを参照できる状態になる整合性モデル。強整合性よりも可用性を優先する。',
    details: {
      target_word: 'eventual consistency',
      choices: ['結果整合性（最終的に全ノードが同じ状態になる）', '強整合性', '線形化可能性', '逐次整合性'],
    },
    source: {
      title: 'Consistency Models in Distributed Databases',
      url: 'https://example.com/consistency-models',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-008',
    sentence_id: 's-008',
    type: 'vocabulary',
    question_text: 'throughput',
    correct_answer: 'スループット（単位時間当たりの処理量）',
    explanation:
      '"Throughput"（スループット）は単位時間当たりに処理できるリクエスト数やデータ量。レイテンシとは異なる観点でシステムの処理能力を評価する指標。',
    details: {
      target_word: 'throughput',
      choices: ['スループット（単位時間当たりの処理量）', 'レイテンシ', '帯域幅', 'ジッター'],
    },
    source: {
      title: 'System Performance Metrics',
      url: 'https://example.com/performance-metrics',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-009',
    sentence_id: 's-009',
    type: 'vocabulary',
    question_text: 'load balancer',
    correct_answer: 'ロードバランサー（負荷を複数サーバに分散する装置）',
    explanation:
      '"Load balancer"（ロードバランサー）はクライアントからのリクエストを複数のサーバに振り分け、負荷を分散する。ラウンドロビン・最小接続数・IPハッシュなどのアルゴリズムがある。',
    details: {
      target_word: 'load balancer',
      choices: ['ロードバランサー（負荷を複数サーバに分散する装置）', 'リバースプロキシ', 'APIゲートウェイ', 'CDN'],
    },
    source: {
      title: 'Microservices Architecture Patterns',
      url: 'https://example.com/microservices-patterns',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-010',
    sentence_id: 's-010',
    type: 'vocabulary',
    question_text: 'race condition',
    correct_answer: 'レースコンディション（処理順序により結果が変わるバグ）',
    explanation:
      '"Race condition"（レースコンディション）は複数のプロセスが共有リソースに同時アクセスし、実行順序によって結果が異なるバグ。ミューテックスやセマフォで排他制御する。',
    details: {
      target_word: 'race condition',
      choices: ['レースコンディション（処理順序により結果が変わるバグ）', 'デッドロック', 'メモリリーク', 'バッファオーバーフロー'],
    },
    source: {
      title: 'Concurrency and Synchronization',
      url: 'https://example.com/concurrency-sync',
    },
    created_at: '2026-03-01T10:00:00Z',
  },

  // --- fill_in_the_blank (10問): 文章の空欄に英単語を4択から選ぶ ---
  {
    id: 'f-001',
    sentence_id: 's-011',
    type: 'fill_in_the_blank',
    question_text:
      'In distributed systems, ___ can accumulate across multiple network hops.',
    correct_answer: 'latency',
    explanation:
      '"Latency" はネットワークホップをまたいで累積する。マイクロサービスのような多段アーキテクチャでは特に影響が大きく、サービス間通信の最適化が重要。',
    details: {
      target_word: 'latency',
      choices: ['latency', 'bandwidth', 'throughput', 'jitter'],
    },
    source: {
      title: 'Understanding Latency in Distributed Systems',
      url: 'https://example.com/latency-distributed-systems',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-002',
    sentence_id: 's-012',
    type: 'fill_in_the_blank',
    question_text:
      'The ___ pattern wraps a remote call to detect failures and stop sending requests when a threshold is exceeded.',
    correct_answer: 'circuit breaker',
    explanation:
      '"Circuit breaker" パターンは障害を検出し、閾値を超えたときにリクエストの送信を停止する。Hystrixや Resilience4jなどのライブラリが実装を提供している。',
    details: {
      target_word: 'circuit breaker',
      choices: ['circuit breaker', 'load balancer', 'API gateway', 'service mesh'],
    },
    source: {
      title: 'Resilience Patterns for Microservices',
      url: 'https://example.com/resilience-patterns',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-003',
    sentence_id: 's-013',
    type: 'fill_in_the_blank',
    question_text:
      'Horizontal ___ involves adding more machines to distribute the workload.',
    correct_answer: 'scaling',
    explanation:
      '"Scaling"（スケーリング）の中でも水平スケーリングはサーバを追加して負荷を分散する手法。クラウド環境では自動スケーリンググループを用いて実現される。',
    details: {
      target_word: 'scaling',
      choices: ['scaling', 'partitioning', 'caching', 'replication'],
    },
    source: {
      title: 'Scaling Web Applications',
      url: 'https://example.com/scaling-web-apps',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-004',
    sentence_id: 's-014',
    type: 'fill_in_the_blank',
    question_text:
      'Docker uses ___ to isolate applications and their dependencies in a portable format.',
    correct_answer: 'containers',
    explanation:
      '"Containers" はアプリケーションとその依存関係をOS上で分離して実行する仮想化技術。仮想マシンと異なりホストOSのカーネルを共有するため、軽量で起動が速い。',
    details: {
      target_word: 'containers',
      choices: ['containers', 'virtual machines', 'namespaces', 'images'],
    },
    source: {
      title: 'Introduction to Docker and Containerization',
      url: 'https://example.com/docker-intro',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-005',
    sentence_id: 's-015',
    type: 'fill_in_the_blank',
    question_text:
      'The ___ is responsible for routing incoming requests to the appropriate backend service.',
    correct_answer: 'API gateway',
    explanation:
      '"API gateway" はクライアントからのリクエストを受け取り、適切なバックエンドサービスにルーティングする。認証、レート制限、ロギングなどのクロスカッティングコンサーンも担う。',
    details: {
      target_word: 'API gateway',
      choices: ['API gateway', 'load balancer', 'reverse proxy', 'service mesh'],
    },
    source: {
      title: 'Microservices Architecture Patterns',
      url: 'https://example.com/microservices-patterns',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-006',
    sentence_id: 's-016',
    type: 'fill_in_the_blank',
    question_text:
      'In Git, a ___ is a lightweight movable pointer to a commit.',
    correct_answer: 'branch',
    explanation:
      '"Branch" はコミットへの軽量なポインタ。Gitでは新しいコミットを作成するたびにブランチポインタが自動的に進む。feature branchパターンで独立した開発ラインを管理できる。',
    details: {
      target_word: 'branch',
      choices: ['branch', 'tag', 'HEAD', 'stash'],
    },
    source: {
      title: 'Git Branching Strategies',
      url: 'https://example.com/git-branching',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-007',
    sentence_id: 's-017',
    type: 'fill_in_the_blank',
    question_text:
      'A ___ test verifies that individual functions or classes behave as expected in isolation.',
    correct_answer: 'unit',
    explanation:
      '"Unit test" は個々の関数やクラスを独立してテストする手法。依存関係をモック化して外部システムの影響を排除し、コードの振る舞いを細粒度で検証する。',
    details: {
      target_word: 'unit',
      choices: ['unit', 'integration', 'end-to-end', 'regression'],
    },
    source: {
      title: 'Testing Strategies for Modern Software',
      url: 'https://example.com/testing-strategies',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-008',
    sentence_id: 's-018',
    type: 'fill_in_the_blank',
    question_text:
      'A ___ is a structured query language command used to retrieve data from a database.',
    correct_answer: 'SELECT',
    explanation:
      '"SELECT" はSQLのデータ取得コマンド。WHERE句でフィルタリング、JOIN句でテーブル結合、GROUP BY句で集計など、複雑なデータ操作を柔軟に記述できる。',
    details: {
      target_word: 'SELECT',
      choices: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
    },
    source: {
      title: 'SQL for Software Engineers',
      url: 'https://example.com/sql-engineers',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-009',
    sentence_id: 's-019',
    type: 'fill_in_the_blank',
    question_text:
      'The ___ model allows multiple readers but only one writer to access a resource at a time.',
    correct_answer: 'readers-writer lock',
    explanation:
      '"Readers-writer lock"（読み書きロック）は複数のリーダーが同時にアクセスできるが、ライターは排他的にアクセスするロックの仕組み。読み取りが多いワークロードで効率的。',
    details: {
      target_word: 'readers-writer lock',
      choices: ['readers-writer lock', 'mutex', 'semaphore', 'spinlock'],
    },
    source: {
      title: 'Concurrency and Synchronization',
      url: 'https://example.com/concurrency-sync',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-010',
    sentence_id: 's-020',
    type: 'fill_in_the_blank',
    question_text:
      'In the CAP theorem, ___ means that every request receives a response, though not necessarily the most recent data.',
    correct_answer: 'availability',
    explanation:
      '"Availability"（可用性）はCAP定理において、すべてのリクエストが（最新データでなくても）レスポンスを受け取れることを保証する性質。分断耐性との両立が求められる。',
    details: {
      target_word: 'availability',
      choices: ['availability', 'consistency', 'partition tolerance', 'durability'],
    },
    source: {
      title: 'Understanding the CAP Theorem',
      url: 'https://example.com/cap-theorem',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
]
