# Olio Test

## Install
To see a working copy of the App you can do one of the following

### Demo Site
you can view the app by visting this link https://agitated-volhard-70d511.netlify.app/

### NPM Install
if you have Node/NPM installed you can run these commands
1) git clone project
  - for ssh users `git clone git@github.com:darrylpargeter/olio_test.git`
  - for HTTP users `git clone https://github.com/darrylpargeter/olio_test.git`
2) `cd olio_test`
3) `npm i`
4) `npm run start`
5) visit localhost:8000

### Docker install
if you have docker installed

#### Docker Compose
if you have docker compose installed you can run the project by doing
1) `docker-compose up -d --build`
2) view app on localhost:8001
and to stop the process run the following
- `docker-compose stop`

#### Plain Docker
To build the image by just using docker run the following
1) `docker build -t olio_test .`
2) `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 8001:8000 -e CHOKIDAR_USEPOLLING=true olio_test`
3) then visit localhost:8001

## Know Issues
### Firefox
- incorrectly sees browser as a mobile, and uses the mobile flow but only when its a prod build, dev build works fine
  - Work around from https://github.com/duskload/react-device-detect/issues/142 
