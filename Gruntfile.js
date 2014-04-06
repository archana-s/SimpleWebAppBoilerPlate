module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          './public/styles/main.css': './public/styles/main.scss'
        }
      }
    },

    autoprefixer: {
      singleFile: {
        src: './public/styles/main.css',
        dest: './public/styles/main.css'
      }
    },

    watch: {
      css: {
        files: './public/styles/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },

      express: {
        files:  [ './public/scripts/*.js', './public/scripts/model/*.js', './public/scripts/view/*.js', './public/scripts/controller/*.js', './public/scripts/router/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false // Without this option specified express won't be reloaded
        }
      },

      prefixer: {
        files: './public/styles/main.css',
        tasks: ['autoprefixer']
      }
    },

    express: {
      options: {
        port: 3474
      },
      dev: {
        options: {
          script: 'server.js'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    }

  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('server', ['express:dev', 'watch']);
  grunt.registerTask('prefixer', ['autoprefixer']);

};