FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

RUN apt update && apt upgrade -y

RUN apt install -y mysql-client-core-8.0

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash \
  && apt-get install -y nodejs
