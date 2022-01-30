#!/bin/bash
# https://askubuntu.com/questions/500071/running-a-sh-to-execute-multiple-commands

# creating containers
sudo docker create --name client -p 3000:3000 bakunya/client
sudo docker create --name comments -p 4001:4001 bakunya/comments
sudo docker create --name events -p 4005:4005 bakunya/events
sudo docker create --name moderations -p 4003:4003 bakunya/moderations
sudo docker create --name posts -p 4000:4000 bakunya/posts
sudo docker create --name query -p 4002:4002 bakunya/query

# start containers
sudo docker start client
sudo docker start comments
sudo docker start events
sudo docker start moderations
sudo docker start posts
sudo docker start query