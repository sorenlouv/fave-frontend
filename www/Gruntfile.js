module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Concatenate files
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: [
          'src/js/app.js',
          'src/js/controllers/*.js',
          'src/js/directives/*.js',
          'src/js/filters/*.js',
          'src/js/services/*.js'
          ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    // Minify
    uglify: {
      options: {
        mangle: false // should be changed to true, but due to dependency injection errors can't ATM
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      files: ['src/js/**/*.js'],
      // JSHint options http://jshint.com/docs/options/
      options: {
        jshintrc: '.jshintrc'
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc' // Get CSSLint options from external file.
      },
      strict: {
        options: {},
        src: ['dist/css/main.css']
      }
    },

    // compile css
    less: {
      development: {
        options: {
          paths: ["src/less/"]
          // cleancss: true
        },
        files: {
          "dist/css/main.css": "src/less/main.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['jshint', 'concat']
      },
      less: {
        files: 'src/less/**/*.less',
        tasks: ['less:development', 'csslint'],
        options: {
          livereload: false
        }
      },
      css: {
        files: 'dist/css/main.css'
      },
      templates: {
        files: ['src/templates/*.html', 'index.html']
      }
    }
  });

  // load in the plugins we need
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s) - will be run by writing "grunt" from the command line
  grunt.registerTask('default', ['less:development', 'jshint', 'csslint', 'concat', 'uglify']);

};