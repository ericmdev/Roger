# Create and start the services in docker-compose.yml.
.PHONY: build
build:
	docker-compose up -d

# Install application dependencies and build static assets.
.PHONY: app
app:
	cd ./webapp/ && composer update && npm update && gulp

# Stop and remove all containers.
.PHONY: clean
clean:
	docker stop rogerthat_nginx_1
	docker stop rogerthat_php_1
	docker stop rogerthat_www_1
	docker rm rogerthat_nginx_1
	docker rm rogerthat_php_1
	docker rm rogerthat_www_1

# List all containers.
.PHONY: ls
ls:
	docker-compose ps

# Show logs for containers.
.PHONY: logs
logs:
	docker-compose logs

# Restart containers.
.PHONY: restart
restart:
	docker-compose restart

# Execute the bash of a container.
.PHONY: exec-nginx
exec-nginx:
	docker exec -it rogerthat_nginx_1 bash

.PHONY: exec-php
exec-php:
	docker exec -it rogerthat_php_1 bash

.PHONY: exec-www
exec-www:
	docker exec -it rogerthat_www_1 bash