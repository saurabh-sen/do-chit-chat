
# Chit Chat

A MERN stack application for chatting.

## technologies used   

REACT.JS
CSS
NODE.JS
MONGODB ATLAS


## Installation

Install chit-chat by cloning this repository

```bash
  git clone https://github.com/saurabh-sen/do-chit-chat.git
  cd chit-chat
```
Install the dependencies of client and server directories

```bash
cd ./client
  npm install
cd ./server
  npm install
```
start the application server

```bash
nodemon index.js
```
start react app

```bash
npm start
```
your application will be running at localhost:3000
    
## Deployment

To deploy this project run

```bash
cd ./client
  npm run build
```
install heroku cli using this documentation(https://devcenter.heroku.com/articles/heroku-cli)
```bash
cd ./server
  heroku login
  heroku create -a example-app
  git remote -v
  git push heroku main
```
now change the socket url 

# your app is live and access by internet :)
