/*jslint node: true */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // CSS
    file_app_css: 'dist/css/fave-app.css',      // final css file
    file_compiled_css: 'dist/css/fave-app-compiled.css', // Intermediary css file
    file_vendors_css: 'dist/css/fave-app-vendors.css',   // vendors css file

    // JS
    file_app_js: 'dist/js/fave-app.js',   // vendors js file
    file_vendors_js: 'dist/js/fave-app-vendors.js',   // vendors js file

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
        dest: '<%= file_vendors_js %>'
      },

      // All javascript files except default files and vendors
      source_files: {
        src: [
          'src/**/*.js',
          '!**/*.default.js',     // Ignore default files
          '!src/vendors/**/*.js'  // ignore vendors
        ],
        dest: '<%= file_app_js %>'
      }
    },

    /*
    * Jshint: all javascript except vendors
    ****************/
    jshint: {
      files: [
        'src/**/*.js',
        '!src/vendors/**' // Exclude vendors
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
      vendors: {
        options: {
          cleancss: true
        },
        src: ['src/vendors/**/*.less'],
        dest: '<%= file_vendors_css %>'
      },
      source_files: {
        options: {
          paths: ['src/less-partials/']
          // cleancss: true
        },

        // Compile all less files which are not partials (starts with "_")
        src: [
          'src/**/*.less',
          '!src/**/_*.less', // exclude partials
          '!src/vendors/**'  // exclude vendors
        ],
        dest: '<%= file_compiled_css %>'
      }
    },

    /*
    * Prefixes: Add/remove CSS prefixes
    ****************/
    autoprefixer: {
      source_files: {
        options: {
          browsers: ['last 2 version']
        },
        src: '<%= file_compiled_css %>',
        dest: '<%= file_app_css %>'
      }
    },

    /*
    * CSSLint
    ****************/
    csslint: {
      options: {
        csslintrc: '.csslintrc' // Get CSSLint options from external file.
      },
      src: ['<%= file_app_css %>']
    },

    /*
    * Watch for changes and execute the following tasks
    ****************/
    watch: {
      options: {
        livereload: true
      },

      // Concat, jshint and reload browser when JS files are updated
      js_source_files: {
        files: [
          'src/**/*.js',
          '!src/vendors/**/*.js'
        ],
        tasks: ['jshint', 'concat:source_files']
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
      less_source_files: {
        files: 'src/**/*.less',
        tasks: ['less:source_files'],
        options: {
          livereload: false
        }
      },

      less_vendors: {
        files: 'src/vendors/**/*.less',
        tasks: ['less:vendors']
      },

      // Add required vendor-prefixes to CSS
      autoprefixer: {
        files: '<%= file_compiled_css %>',
        tasks: ['autoprefixer:source_files'],
        options: {
          livereload: false
        }
      },

      // Lint and reload browser when CSS file is updated
      css: {
        files: '<%= file_app_css %>',
        tasks: ['csslint']
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
  grunt.registerTask('default', ['less:source_files', 'less:vendors', 'autoprefixer', 'csslint', 'jshint', 'concat:source_files', 'concat:js_vendors']);
};