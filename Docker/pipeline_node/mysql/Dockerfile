FROM mysql
EXPOSE 8080 3306
#ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_ROOT_PASSWORD=tnproot

WORKDIR /etc/init.d

# Copiar el archivo para inicializar la db
#COPY setup.sql /docker-entrypoint-initdb.d/setup.sql

RUN ["/usr/local/bin/docker-entrypoint.sh", "mysqld", "--datadir", "/initialized-db"]


#FROM mysql:latest

#COPY --from=builder /initialized-db /var/lib/mysql
#RUN mysql start
#RUN mysql -u root --password=${MYSQL_ROOT_PASSWORD} -e "CREATE DATABASE moodle DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
#RUN mysql -u root --password=${MYSQL_ROOT_PASSWORD} -e "GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,CREATE TEMPORARY TABLES,DROP,INDEX,ALTER ON moodle.* TO 'moodleuser'@' 127.0.0.1' IDENTIFIED BY '"+${MYSQL_ROOT_PASSWORD}+"';"
#docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag