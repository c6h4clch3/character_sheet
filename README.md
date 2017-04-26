# character_sheet
The WebApp for storing Character Sheets of Call of Cthulhu.

## how to develop on docker
### requires
- docker
- docker-compose

First, clone this repository to your local file system.  
Then, `cd docker` and edit `docker-compose.yml` as below.
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
Next, hit `docker-compose up -d` to run your local server,  
`docker-compose run --rm composer install` to install PHP libraries,  
`docker run php php artisan key:generate` to add APPS_KEY for laravel framework.