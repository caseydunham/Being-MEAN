#!/usr/bin/env bash

apt-get -y update

apt-get -y install build-essential

# Use the nodejs PPA
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
bash nodesource_setup.sh

apt-get -y install nodejs mongodb

npm install -g serve-favicon morgan cookie-parser body-parser debug jade express express-generator nodemon
