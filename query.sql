create user admin_app with password '4dm1n+S3gur1d4d';

create database db_app with
  owner admin_app
  encoding = 'UTF8'
  connection limit = -1;

grant connect on database db_app to admin_app;
grant all privileges on schema public to admin_app;
