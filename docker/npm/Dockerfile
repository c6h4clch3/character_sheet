FROM debian:jessie

RUN apt-get update -y
RUN apt-get install -y curl git
RUN curl -sL https://deb.nodesource.com/setup | bash --
RUN apt-get install -y nodejs
RUN npm update -g npm
RUN npm cache clean
RUN npm i -g n
RUN n stable
RUN apt-get purge -y nodejs npm

RUN mkdir -p /data
VOLUME ["data"]
WORKDIR /data

ENTRYPOINT ["npm"]
CMD ["-h"]
