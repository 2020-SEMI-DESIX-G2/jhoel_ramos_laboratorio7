#!/usr/bin/env bash
STOP="\033[0m"
COLOR="\033[38;5;85m"
########################################################################################################################
################################################ SET UP NPM APP ########################################################
########################################################################################################################

### MONGO INIT ### 
npm run mongo:start

echo -e "${COLOR}Docker build... 9~.~9${STOP}"
### BUILDING IMAGE... ### 
docker build -t des9/lab7:1 .

echo -e "${COLOR}Iniciando aplicación...${STOP}"
### STARTING APP ### 
docker run -d --rm -p 3000:3000 --name appestudiantes des9/lab7:1

echo -e "${COLOR}Ejecutando en el puerto 3000${STOP}"
