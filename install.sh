#!/bin/bash
# https://askubuntu.com/questions/500071/running-a-sh-to-execute-multiple-commands
cd client && sudo docker build -t bakunya/client .
cd ../comments && sudo docker build -t bakunya/comments .
cd ../event-bus && sudo docker build -t bakunya/events .
cd ../moderation && sudo docker build -t bakunya/moderations .
cd ../posts && sudo docker build -t bakunya/posts .
cd ../query && sudo docker build -t bakunya/query .