### Building a CRUD App with React + Redux backed by a Rails 5 JSON API

Built the JSON API with Rails 5 following this blog post:

http://www.thegreatcodeadventure.com/building-a-super-simple-rails-api-json-api-edition-2/

Building the React + Redux application following this blog series:

http://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/

Modified tutorial to use create-react-app:

https://github.com/facebookincubator/create-react-app

### Tools

Rails 5 JSON API

React + Redux

Docker

Hosted on Github Pages

### Docker Cheatsheet

- build docker image based on Dockerfile

  - docker-compose build

- spin up container as directed in docker-compose.yml

  - docker-compose up -d

- install node modules

  - docker run -v `pwd`:/src/usr/app catbook_app npm install

- run the server

  - docker-compose up -d
