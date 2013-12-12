module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Concatenate files
    concat: {
      options: {
        separator: '\n'
      },
      js_vendors: {
        src: [
          'src/vendors/*.js',
          '!src/vendors/facebook-sdk-*.js'
        ],
        dest: 'dist/js/<%= pkg.name %>-vendors.js'
      },
      js: {
        src: [
          'src/**/*.js',
          '!src/vendors/*.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      less: {
        src: [
          'src/**/*.less',    // All less files
          '!src/less/main-compiled.less'    // Except the main-compiled
        ],
        dest: 'src/less/main-compiled.less'
      }
    },

    jshint: {
      files: [
        'src/**/*.js',
        '!src/vendors/*.js'
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
          paths: ["src/less/"]
          // cleancss: true
        },
        files: {
          "dist/css/<%= pkg.name %>.css": "src/less/main-compiled.less"
        }
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc' // Get CSSLint options from external file.
      },
      strict: {
        options: {},
        src: ['dist/css/<%= pkg.name %>.css']
      }
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
        tasks: ['concat:less', 'less:development', 'csslint'],
        options: {
          livereload: false
        }
      },
      css: {
        files: 'dist/css/<%= pkg.name %>.css'
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
  grunt.registerTask('default', ['concat:less', 'less:development', 'csslint', 'jshint', 'concat:js', 'concat:js_vendors']);

};