ENV=development
dir=${CURDIR}
project=-p sts


start:
	@docker-compose $(project) up --build --force-recreate

start-prod:
	@docker-compose $(project) up --build --force-recreate -d

stop:
	@docker-compose $(project) down
