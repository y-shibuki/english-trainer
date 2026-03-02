import type { Question } from '@/types/question'

export const mockQuestions: Question[] = [
  // --- vocabulary (10問) ---
  {
    id: 'v-001',
    sentence_id: 's-001',
    type: 'vocabulary',
    question_text: '___ is the time delay between a request and a response.',
    correct_answer: 'Latency',
    explanation:
      '"Latency" は「遅延」を意味し、リクエストを送信してからレスポンスを受信するまでの時間差を指す。分散システムの性能評価において重要な指標。',
    details: {
      target_word: 'Latency',
      choices: ['Latency', 'Throughput', 'Bandwidth', 'Jitter'],
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
    question_text:
      'A ___ is a design pattern that prevents cascading failures by stopping requests to a failing service.',
    correct_answer: 'circuit breaker',
    explanation:
      '"Circuit breaker"（サーキットブレーカー）は障害の連鎖を防ぐ設計パターン。故障したサービスへのリクエストを一時的に遮断し、システム全体の安定性を保つ。',
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
    id: 'v-003',
    sentence_id: 's-003',
    type: 'vocabulary',
    question_text:
      '___ consistency means that all nodes in a distributed system see the same data at the same time.',
    correct_answer: 'Strong',
    explanation:
      '"Strong consistency"（強整合性）は、すべてのノードが常に同一のデータを参照できる状態。CAP定理の文脈で可用性とのトレードオフが生じる。',
    details: {
      target_word: 'Strong',
      choices: ['Strong', 'Eventual', 'Weak', 'Causal'],
    },
    source: {
      title: 'Consistency Models in Distributed Databases',
      url: 'https://example.com/consistency-models',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-004',
    sentence_id: 's-004',
    type: 'vocabulary',
    question_text:
      'In the ___ model, a request is handled asynchronously without blocking the caller.',
    correct_answer: 'non-blocking',
    explanation:
      '"Non-blocking"（非ブロッキング）モデルでは、I/O操作の完了を待たずに処理を継続できる。Node.jsやNIOなどのイベントドリブン処理に多用される。',
    details: {
      target_word: 'non-blocking',
      choices: ['non-blocking', 'synchronous', 'sequential', 'polling'],
    },
    source: {
      title: 'Asynchronous Programming Patterns',
      url: 'https://example.com/async-patterns',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-005',
    sentence_id: 's-005',
    type: 'vocabulary',
    question_text:
      '___ is the ability of a system to handle increased load by adding more resources.',
    correct_answer: 'Scalability',
    explanation:
      '"Scalability"（スケーラビリティ）はシステムの負荷増加に対応する能力。水平スケーリング（サーバ増設）と垂直スケーリング（サーバ増強）の2種類がある。',
    details: {
      target_word: 'Scalability',
      choices: ['Scalability', 'Availability', 'Durability', 'Reliability'],
    },
    source: {
      title: 'Scaling Web Applications',
      url: 'https://example.com/scaling-web-apps',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-006',
    sentence_id: 's-006',
    type: 'vocabulary',
    question_text:
      'A ___ key is used to uniquely identify a record in a database table.',
    correct_answer: 'primary',
    explanation:
      '"Primary key"（主キー）はデータベーステーブルの各レコードを一意に識別するカラムまたはカラムの組み合わせ。NULL不可かつ重複不可が条件。',
    details: {
      target_word: 'primary',
      choices: ['primary', 'foreign', 'composite', 'surrogate'],
    },
    source: {
      title: 'Relational Database Design Fundamentals',
      url: 'https://example.com/db-design',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-007',
    sentence_id: 's-007',
    type: 'vocabulary',
    question_text:
      '___ is a mechanism that allows multiple goroutines to communicate by passing values.',
    correct_answer: 'Channel',
    explanation:
      '"Channel"（チャネル）はGoの並行処理プリミティブ。goroutine間でデータを安全に受け渡しするための型付きパイプとして機能する。',
    details: {
      target_word: 'Channel',
      choices: ['Channel', 'Mutex', 'WaitGroup', 'Context'],
    },
    source: {
      title: 'Concurrency Patterns in Go',
      url: 'https://example.com/go-concurrency',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-008',
    sentence_id: 's-008',
    type: 'vocabulary',
    question_text:
      'An ___ index speeds up query performance by allowing the database engine to locate rows faster.',
    correct_answer: 'index',
    explanation:
      '"Index"（インデックス）はデータベースの検索性能を向上させるデータ構造。B-treeやハッシュなどの実装があり、読み取りを高速化する一方で書き込みコストが増加する。',
    details: {
      target_word: 'index',
      choices: ['index', 'partition', 'shard', 'view'],
    },
    source: {
      title: 'Database Performance Optimization',
      url: 'https://example.com/db-performance',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-009',
    sentence_id: 's-009',
    type: 'vocabulary',
    question_text:
      '___ is a software architecture pattern where components communicate via events.',
    correct_answer: 'Event-driven',
    explanation:
      '"Event-driven architecture"（イベント駆動アーキテクチャ）はシステムの状態変化をイベントとして発行し、サブスクライバーが非同期に処理するパターン。疎結合なシステム設計に有効。',
    details: {
      target_word: 'Event-driven',
      choices: ['Event-driven', 'Request-response', 'Batch processing', 'Polling-based'],
    },
    source: {
      title: 'Event-Driven Architecture Explained',
      url: 'https://example.com/eda-explained',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'v-010',
    sentence_id: 's-010',
    type: 'vocabulary',
    question_text:
      '___ is the practice of automatically deploying code to production after passing all tests.',
    correct_answer: 'Continuous Deployment',
    explanation:
      '"Continuous Deployment"（継続的デプロイメント）はテストに合格したコードを自動的に本番環境にデプロイする実践。CD（継続的デリバリー）と区別され、手動承認ステップがない点が特徴。',
    details: {
      target_word: 'Continuous Deployment',
      choices: ['Continuous Deployment', 'Continuous Integration', 'Feature Flags', 'Blue-Green Deployment'],
    },
    source: {
      title: 'Modern CI/CD Practices',
      url: 'https://example.com/cicd-practices',
    },
    created_at: '2026-03-01T10:00:00Z',
  },

  // --- fill_in_the_blank (10問) ---
  {
    id: 'f-001',
    sentence_id: 's-011',
    type: 'fill_in_the_blank',
    question_text:
      'In distributed systems, ___ can accumulate across multiple network hops.',
    correct_answer: 'latency',
    explanation:
      '"Latency" はネットワークホップをまたいで累積する。マイクロサービスのような多段アーキテクチャでは特に影響が大きく、サービス間通信の最適化が重要。',
    details: { target_word: 'latency' },
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
    details: { target_word: 'circuit breaker' },
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
    details: { target_word: 'scaling' },
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
      'A ___ join combines rows from two tables based on a related column between them.',
    correct_answer: 'foreign key',
    explanation:
      '"Foreign key" を使ったJOINは関連するテーブルのレコードを結合する。参照整合性を保証し、データの一貫性を維持するためにも重要な概念。',
    details: { target_word: 'foreign key' },
    source: {
      title: 'Relational Database Design Fundamentals',
      url: 'https://example.com/db-design',
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
    details: { target_word: 'API gateway' },
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
      'Docker uses ___ to isolate applications and their dependencies in a portable format.',
    correct_answer: 'containers',
    explanation:
      '"Containers" はアプリケーションとその依存関係をOS上で分離して実行する仮想化技術。仮想マシンと異なりホストOSのカーネルを共有するため、軽量で起動が速い。',
    details: { target_word: 'containers' },
    source: {
      title: 'Introduction to Docker and Containerization',
      url: 'https://example.com/docker-intro',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-007',
    sentence_id: 's-017',
    type: 'fill_in_the_blank',
    question_text:
      'In Git, a ___ is a lightweight movable pointer to a commit.',
    correct_answer: 'branch',
    explanation:
      '"Branch" はコミットへの軽量なポインタ。Gitでは新しいコミットを作成するたびにブランチポインタが自動的に進む。feature branchパターンで独立した開発ラインを管理できる。',
    details: { target_word: 'branch' },
    source: {
      title: 'Git Branching Strategies',
      url: 'https://example.com/git-branching',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-008',
    sentence_id: 's-018',
    type: 'fill_in_the_blank',
    question_text:
      'A ___ test verifies that individual functions or classes behave as expected in isolation.',
    correct_answer: 'unit',
    explanation:
      '"Unit test" は個々の関数やクラスを独立してテストする手法。依存関係をモック化して外部システムの影響を排除し、コードの振る舞いを細粒度で検証する。',
    details: { target_word: 'unit' },
    source: {
      title: 'Testing Strategies for Modern Software',
      url: 'https://example.com/testing-strategies',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-009',
    sentence_id: 's-019',
    type: 'fill_in_the_blank',
    question_text:
      'The ___ layer in a neural network applies a non-linear activation function to its inputs.',
    correct_answer: 'hidden',
    explanation:
      '"Hidden layer" はニューラルネットワークの入力層と出力層の間に位置する層。活性化関数（ReLU、sigmoidなど）を用いて非線形変換を行い、複雑なパターンを学習できる。',
    details: { target_word: 'hidden' },
    source: {
      title: 'Deep Learning Fundamentals',
      url: 'https://example.com/deep-learning-basics',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
  {
    id: 'f-010',
    sentence_id: 's-020',
    type: 'fill_in_the_blank',
    question_text:
      'A ___ is a structured query language command used to retrieve data from a database.',
    correct_answer: 'SELECT',
    explanation:
      '"SELECT" はSQLのデータ取得コマンド。WHERE句でフィルタリング、JOIN句でテーブル結合、GROUP BY句で集計など、複雑なデータ操作を柔軟に記述できる。',
    details: { target_word: 'SELECT' },
    source: {
      title: 'SQL for Software Engineers',
      url: 'https://example.com/sql-engineers',
    },
    created_at: '2026-03-01T10:00:00Z',
  },
]
