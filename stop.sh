#!/bin/bash
# https://askubuntu.com/questions/500071/running-a-sh-to-execute-multiple-commands

# stop containers
sudo docker kill client
sudo docker kill comments
sudo docker kill events
sudo docker kill moderations
sudo docker kill posts
sudo docker kill query