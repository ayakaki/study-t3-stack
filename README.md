# study-t3-stack

T3 Stack に関する学習リポジトリ

## COMMAND

### Docker コンテナのデータベースに入る

`docker exec -it study-t3-stack_dev-mysql_1 mysql -u user_trial -ppassword_trial`

### PlanetScale のプロキシ接続（main ブランチ）

`pscale connect study-t3-stack main --port 3309`

### PlanetScale への接続（main ブランチ）

`pscale shell study-t3-stack main`

## Next.js の簡単な流れ

- 環境変数等の設定
  - GitHub の OAuth アプリケーション作成
  - .env
    - NextAuth の SECRET
    - Discord -> GitHubClient
  - src/env/schema.mjs
    - Discord -> GitHubClient（zod）
  - src/pages/api/auth/[...nextauth].ts
    - Discord -> GitHubClient
  - 不要ファイルの削除
  - prisma/schema.prisma
    - DB の種別変更
    - Task モデルの追加
- DB との接続
  - 各モデルに対応したテーブル生成：`npx prisma migrate dev --name init`
  - 各モデルに対応した型生成：`npx prisma generate`
- GitHub 認証
  - next-auth/react の `signIn` メソッドを配置
  - 👆 を表示ために Pages 配下に配置
