#/bin/bash

echo 'Deploy started...'
rsync -av --exclude='node_modules' --exclude='.git' ../nodejs-tinyurl/ ubuntu@152.70.74.152:~/projects/tinyurl
ssh ubuntu@152.70.74.152 "cd ~/projects/tinyurl && docker-compose up -d --build"
echo 'Deployed!'
