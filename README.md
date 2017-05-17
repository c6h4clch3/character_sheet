# character_sheet
クトゥルフ神話TRPGキャラクターシート作成・保管用Webアプリケーション

## 開発環境セットアップ( Docker )
### 事前にインストールしておくべきもの
- docker
- docker-compose

docker-compose_sample.ymlをdocker-compose.ymlにリネームし編集する。
```
...
  php:
    build: ./php
    ports:
      - '(any port number you haven't already use):80'
    volumes:
      - ../:/var/www/html
    depends_on:
      - mysql
...
```
PHPライブラリのインストール(Composer)  
`$ docker-compose run --rm composer install`  

laravelのAPP_KEY生成  
`$ docker run php php artisan key:generate`  

ローカルサーバの起動  
`$ docker-compose up -d`  