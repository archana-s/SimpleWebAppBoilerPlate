# Simple Template for building a web app using Backbone/Marionette and Node/Express

## Tech/Libraries in here
* Backbone with Marionette for MVC structure
* Node with Express 3.0
* Bower/Grunt
* SASS + Grunt Autoprefixing

## Features
1. Livereload
2. Normalize CSS Resets - public/styles/normalize.css includes CSS resets. This is automatically included in the main.css file
3. Atomic CSS skeleton - Having used almost Atomic CSS, I added a few default files that you can start using (colors.scss, font.scss, mixins.scss)
4. Page load error functions - public/scripts/error.js
5. MVC set up using Backbone/Marionette -  controllers, views and models folder inside scripts directory.
6. Routing setup using Backbone and Marionette - Router file in public/scripts/router
7. Events set up using Communicator that uses Backbone Wreqr - An example of a Communicator event bind and trigger in public/scripts/views/homeView.js
8. Grunt autoprefixer added - Autoprefixer adds prefixes on the right and left side of the CSS structure. No need to memorize of refer to anything in compass mixin. This is also more exhaustive than compass.
9. Flexbox Mixin - start using Flexbox right away using @include horz-flexbox(<horizontal align>, <vertical align>)
10. Vertical and Horizontal center align CSS mixin. Check it out in public/styles/mixins.scss
11. Positioning CSS mixin. Available in public/styles/mixins.scss

## Set up
* Clone/download the project in your machine
* Install node.js - Visit [http://nodejs.org/download/](http://nodejs.org/download/)
* Install bower - Visit [bower.io](bower.io)
* Install Grunt - `npm install -g grunt-cli`
* Perform `npm install` in the root dir
* Perform `bower install` (This will place bower_components in public/scripts dir)
* Run `grunt server`
* Your app starts running on 3475. Go to [localhost:3475](localhost:3475). You can always change the port number in server.js
* You are ready to go!
