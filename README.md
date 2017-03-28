# A full-stack dev environment for node developers.

## Requirements
The environment depends on Node.js, Rethinkdb & nodemon. You can install all of these with npm.

[NodeJS](https://nodejs.org/en/)
[Rethinkdb](https://www.rethinkdb.com/)
[nodemon](https://github.com/remy/nodemon)

## Getting started
Clone the repo and change the origin for another git repo. Change your `package.json` information and run an `npm install` to get all of the required node modules.

To run the environment on your local host you will need to fire up 3 commands:

`$ rethinkdb`

This will start an instance of rethinkdb on your pc.

To get the server up and going run the following command:

`$ grunt server`

Finally start the watch task on your client files:

`$ grunt watch`

And your good to go!

---
## Stack and grunt task information

Stack:
1. Node.js
2. RethinkDB
3. Hapi.js
4. Sass
5. React
6. Handlebars

Grunt tasks:
1. `grunt server` : Starts a Hapi server which watches for file changes
2. `grunt build:css` : Runs sass and builds deploy.css
3. `grunt build:js` : Runs browserify/babel/react to create deploy.js
4. `grunt version:major:minor:patch` : Adds all files in the working directory to git and versions the repo (excluding git ignore files)
5. `grunt watch` : Watches all client files for changes and builds automatically

---
## Contributing

I actively use this to fire up new projects so preferably clone your own repo to make changes to this. If however you have any suggestions which you believe will benefit this repo for myself please fell free to fork it.