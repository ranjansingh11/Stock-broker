#!/bin/bash

set -x

docker-compose up --build -d

sleep 5

docker exec mongo1 bash /scripts/rs-init.sh
