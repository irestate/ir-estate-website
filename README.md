# IR estate Website

IR estate のコーポレートサイトです。
Next.js App Router / TypeScript / static export / GitHub Pages 公開を前提にしています。

## Setup

```bash
npm ci
npm run dev
```

ローカル確認:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

`next.config.ts` で `output: "export"` を指定しているため、ビルド成果物は `out/` に生成されます。

## Deploy

GitHub Pages へのデプロイは `.github/workflows/pages.yml` で行います。

必要な GitHub 設定:

- Repository Settings > Pages > Source: GitHub Actions

リポジトリページとして公開する場合は、必要に応じて Repository Variable を設定します。

```text
PAGES_BASE_PATH=/ir-estate-website
```

ユーザー/組織ページのルート公開であれば、通常この変数は不要です。

## Branch Policy

- `main`: 本番公開用ブランチ。GitHub Pages のデプロイ対象です。
- `dev`: 作業用ブランチ。通常の修正・検証はこちらで行い、確認後に `main` へ反映します。

基本フロー:

```bash
git switch dev
# 作業・確認
git push origin dev
# 確認後、main にマージして本番反映
```

## Operations

- 会社情報やニュースの文言は `app/page.tsx` を編集します。
- トップページの見た目は `app/page.module.css` を編集します。
- ヒーロー動画は `public/hero-video.mp4` を差し替えます。

## Repository

GitHub:

```text
https://github.com/irestate/ir-estate-website
```
