# Simple microservices from Microservices with Node JS and React course by Stephen Grider

# Installation in linux
Looking for installation docker tutorial for linux, especially linux mint? 

[Check out my github gist in here.](https://gist.github.com/bakunya/1aea90c554b18e45cfbcb8bda556e514/)

i havent learn about docker compose yet, so i use bash script for simplify command of docker.

[https://askubuntu.com/questions/500071/running-a-sh-to-execute-multiple-commands/](https://askubuntu.com/questions/500071/running-a-sh-to-execute-multiple-commands)

### Change script shell permission
```bash
chmod +x ./install.sh ./start.sh ./stop.sh ./restart.sh ./remove.sh
```

### Create docker image
```bash
./install.sh
```

### Start docker container
```bash
./start.sh
```

### Restart docker container
```bash
./restart.sh
```

### Stop docker container
```bash
./stop.sh
```

### Remove docker container
```bash
./remove.sh
```

# Port

## Client
### Docker port: 3000
### Exposed port: 3000

## Comments
### Docker port: 4001
### Exposed port: 4001

## Event-bus
### Docker port: 4005
### Exposed port: 4005

## Moderation
### Docker port: 4003
### Exposed port: 4003

## Posts
### Docker port: 4000
### Exposed port: 4000

## Query
### Docker port: 4002
### Exposed port: 4002