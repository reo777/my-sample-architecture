1. ビルドファイルを作成する

```
make build
```

2. モックサーバーを起動する
   モックサーバーの起動に prism-cli を使用しています。
   インストールしていなければ、お手数ですがインストールをお願いします。

```
npm install -g @stoplight/prism-cli
# or
yarn global add @stoplight/prism-cli
```

モックサーバーを起動

```
start-mock: prism mock swagger.yaml -p 3000
```

3. ローカルを起動する

```
start: next start
```
