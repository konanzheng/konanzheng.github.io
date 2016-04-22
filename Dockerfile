FROM nginx
MAINTAINER kevinzheng <ruizhaozheng@gmail.com>


COPY . /usr/share/nginx/html
EXPOSE 80