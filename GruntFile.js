'use strict';

module.exports = (grunt) => {

  require('load-grunt-tasks')(grunt);

  let npmTask = [
      'grunt-browserify',
      'grunt-contrib-watch',
      'grunt-contrib-uglify',
      'grunt-contrib-cssmin'
    ],
    config = {
      browserify: {
        dist: {
          options: {
            transform: [
              ['babelify', 
                {
                  'presets': ['es2015']
                }
              ]
            ]
          },
          files: {
            'app/app.min.js': ['./src/**/*.js']
          }
        }
      },
      uglify: {
        'my_target': {
          files: {
            'app/app.min.js': ['app/app.min.js']
          }
        }
      },
      cssmin: {
        target: {
          files: {
            'app/app.min.css': ['./css/**/*.css']
          }
        }
      },
      minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
              'app/index.html': 'index.html'
            }
        }
      },
      eslint: {
        files: ['./src/**/*.js']
      },
      watch: {
        browserify: {
          files: ['./src/**/*.js'],
          tasks: ['browserify']
        },
        cssmin: {
          files: ['./css/**/*.css'],
          tasks: ['cssmin']         
        },
        minifyHtml: {
          files: ['index.html'],
          tasks: ['minifyHtml']         
        }
      }
    };

  //Set Grunt configuration
  grunt.initConfig(config);

  //Load Grunt tasks
  npmTask.forEach((npmTask) => {
    grunt.loadNpmTasks(npmTask);
  });
  //Register Grunt Tasks
  grunt.registerTask('buildDev', ['browserify', 'uglify', 'cssmin', 'minifyHtml']);
};