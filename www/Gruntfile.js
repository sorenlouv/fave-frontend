module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    css_dist: 'dist/css/fave-app.css',

    // Concatenate files
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

      // All javascript files except vendors
      js: {
        src: [
          'src/**/*.js',
          '!src/vendors/**/*.js'
        ],
        dest: 'dist/js/fave-app.js'
      }
    },

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

    // compile less to css
    less: {
      development: {
        options: {
          paths: ["src/mixins/"]
          // cleancss: true
        },

        // Compile all less files which are not partials (starts with "_")
        src: [
          'src/**/*.less',
          '!src/**/_*.less'
        ],
        dest: '<%= css_dist %>'
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc' // Get CSSLint options from external file.
      },
      src: ['<%= css_dist %>']
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'concat:js']
      },
      less: {
        files: 'src/**/*.less',
        tasks: ['less:development', 'csslint'],
        options: {
          livereload: false
        }
      },
      templates: {
        files: ['src/**/*.html', 'index.html']
      }
    }
  });

  // load in the plugins we need
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s) - will be run by writing "grunt" from the command line
  grunt.registerTask('default', ['less:development', 'csslint', 'jshint', 'concat:js', 'concat:js_vendors']);

};