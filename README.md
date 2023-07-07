# Makefile

## mongo

mongo:
docker run -p 27017:27017 \
 -d \
 --rm \
 --name mongodb \
 --network notes-net \
 mongo

## server

backend:
docker run -p 5000:5000 \
 -d \
 --rm \
 --name notes-backend \
 --network notes-net \
 backend

## client

frontend:
docker run -p 3000:3000 \
 -d \
 --rm \
 --name notes-frontend \
 --network notes-net \
 frontend

# frontend

cd client
docker run -p 3000:3000 -d --rm --name notes-frontend frontend

docker build -t frontend .

# backend

cd server
docker run -p 5000:5000 -d --rm --name notes-backend backend

docker build -t backend .

# network

docker network ls
docker network create notes-net
