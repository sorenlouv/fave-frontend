/*jslint node: true */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    css_dist: 'dist/css/fave-app.css',
    less_compiled: 'dist/css/less_compiled.css',

    /*
    * Concatenate files
    ****************/
    concat: {
      options: {
        separator: '\n'
      },
      js_vendors: {
        src: [
          'src/vendors/**/*.js',
          '!src/vendors/skip/*.js'
        ],
        dest: 'dist/js/fave-app-vendors.js'
      },

      // All javascript files except default files and vendors
      js: {
        src: [
          'src/**/*.js',
          '!**/*.default.js', // Ignore default files
          '!src/vendors/**/*.js' // ignore vendors
        ],
        dest: 'dist/js/fave-app.js'
      }
    },

    /*
    * Jshint: all javascript except vendors
    ****************/
    jshint: {
      files: [
        'src/**/*.js',
        '!src/vendors/**/*.js'
      ],
      // JSHint options http://jshint.com/docs/options/
      options: {
        jshintrc: '.jshintrc'
      }
    },

    /*
    * Less: Compile less to css
    ****************/
    less: {
      development: {
        options: {
          paths: ['src/less-partials/']
          // cleancss: true
        },

        // Compile all less files which are not partials (starts with "_")
        src: [
          'src/**/*.less',
          '!src/**/_*.less'
        ],
        dest: '<%= less_compiled %>'
      }
    },

    /*
    * Prefixes: Add/remove CSS prefixes
    ****************/
    autoprefixer: {
      development: {
        options: {
          browsers: ['last 2 version']
        },
        src: '<%= less_compiled %>',
        dest: '<%= css_dist %>'
      }
    },

    /*
    * CSSLint
    ****************/
    csslint: {
      options: {
        csslintrc: '.csslintrc' // Get CSSLint options from external file.
      },
      src: ['<%= css_dist %>']
    },

    /*
    * Watch for changes and execute the following tasks
    ****************/
    watch: {
      options: {
        livereload: true
      },

      // Concat, jshint and reload browser when JS files are updated
      js: {
        files: [
          'src/**/*.js',
          '!src/vendors/**/*.js'
        ],
        tasks: ['jshint', 'concat:js']
      },

      // Concat and reload browser when JS files are updated
      js_vendors: {
        files: [
          'src/vendors/**/*.js',
          '!src/vendors/skip/*.js'
        ],
        tasks: ['concat:js_vendors']
      },

      // Compile less to CSS
      less: {
        files: 'src/**/*.less',
        tasks: ['less:development', 'csslint'],
        options: {
          livereload: false
        }
      },

      // Add required vendor-prefixes to
      autoprefixer: {
        files: '<%= less_compiled %>',
        tasks: ['autoprefixer:development']
      },

      // Reload browser when CSS file is updated
      css: {
        files: '<%= css_dist %>'
      },

      // Reload browser when templates are updated
      templates: {
        files: ['src/**/*.html', 'index.html']
      }
    }
  });

  /*
  * Load in the plugins we need
  ****************/
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');

  /*
  * Default tasks - will be run by writing "grunt" from the command line
  ****************/
  grunt.registerTask('default', ['less:development', 'csslint', 'jshint', 'concat:js', 'concat:js_vendors', 'autoprefixer']);
};