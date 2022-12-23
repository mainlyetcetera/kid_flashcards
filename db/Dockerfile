FROM postgres:latest

RUN echo 'starting postgres...hopefully...'

COPY rawr.sql /docker-entrypoint-initdb.d/
