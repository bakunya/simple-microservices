#!/bin/bash
# https://askubuntu.com/questions/500071/running-a-sh-to-execute-multiple-commands

# start containers
sudo docker start client
sudo docker start comments
sudo docker start events
sudo docker start moderations
sudo docker start posts
sudo docker start query