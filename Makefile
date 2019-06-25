ENV=development
dir=${CURDIR}
project=-p sts


start:
	@docker-compose $(project) up --build --force-recreate

stop:
	@docker-compose $(project) down

