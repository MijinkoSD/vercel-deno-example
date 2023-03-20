# Vercel + Deno のサンプルリポジトリ

閲覧：https://sd-hello.vercel.app/

関連：[https://scrapbox.io/Mijinko/VercelとDenoでサーバーレス関数を作ってみる](https://scrapbox.io/Mijinko/Vercel%E3%81%A8Deno%E3%81%A7%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%AC%E3%82%B9%E9%96%A2%E6%95%B0%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B)

## ディレクトリ構造

- [`.vscode/`](vscode/)
  - VSCodeの設定ファイル
- [`api/`](api/)
  - サーバーレス関数はこのディレクトリに格納しないと実行されない
  - Web上では`/<ファイル名(拡張子無し)>`でアクセス可能
    - [vercel.json](vercel.json)で`rewrites`の設定を変更しているのでこうなっている
- [`public/`](public/)
  - 静的なファイルを入れるディレクトリ
  - Vercel上ではこのディレクトリの直下がURLのルートパスに割り当てられている
    - publicディレクトリが無ければ、リポジトリの直下がルートパスになる
  - `api`ディレクトリをルートパスにする設定とぶつからないように色々と~~狡い~~上手いことやっている
- [`.gitignore`](.gitignore)
  - Gitリポジトリに含めないファイル
  - Vercelのビルドディレクトリを指定してある
- [`.vercelignore`](.vercelignore)
  - Vercelのサーバー内に入れないファイル
  - 関係ないファイルは入れないようにしよう
- `README.md`
  - このファイル
- [`vercel.json`](vercel.json)
  - Vercelの設定ファイル
  - Denoを使う設定とか、URLパスの上書き設定とかはここで行っている
