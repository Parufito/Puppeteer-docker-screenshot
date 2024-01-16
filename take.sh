#!/bin/bash

# Go to working dir
cd ~/Puppeteer-docker-screenshot

## Set variables
# URL:  		 Adreça a visitar.
# SELECTED_DIV:  En cas de voler només un div de la URL especificar, si no, deixar buit (entre cometes).
# WAIT_ELEMENT:  A vegades has d'esperar a que es carreguin alguns elements. Indicar element si necessari i si no deixar buit (entre cometes).

URL="https://enigmarius.ccma.cat/"
SELECTED_DIV=".card-body"
WAIT_ELEMENT=".card-body"

#Pupetteer docker screenshot
docker run -i -v $(pwd)/screenshots:/home/pptruser/screenshots --init --cap-add=SYS_ADMIN --rm -e SELECTED_DIV="$SELECTED_DIV" -e WAIT_ELEMENT="$WAIT_ELEMENT" -e URL="$URL" ghcr.io/puppeteer/puppeteer:latest node -e "$(cat screenshot.js)"
