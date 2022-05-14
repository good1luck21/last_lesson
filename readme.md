# laravel

## コントローラー作成便利フラグ

```
php artisan make:controller -r -m Model ControllerName
```

- `-r` フラグを付けると resource に必要な action を全部作成してくれます
- `-m` フラグを付けるとモデルと紐付けてくれて、インプリシットバインドの設定もしてくれます。

# Express で必要なパッケージ

- 開発していくにあたって必要なパッケージ一覧
  - express: Node.js のサーバーサイドのフレームワーク
  - cors: API での authetication エラーなくすよ
  - mongoose: MongoDB にアクセス簡単にできるようにするよ
  - dotenv: 秘匿ファイルにするよ
- その他あると便利
  - nodemon: 変更をリアルタイムに反映
  - concurrently: 同時に色々立ち上げられる
