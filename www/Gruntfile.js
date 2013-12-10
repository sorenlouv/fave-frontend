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
        src: ['src/**/*.js'],
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
      files: ['src/**/*.js'],
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
        src: ['dist/css/<%= pkg.name %>.css']
      }
    },

    // compile css
    less: {
      development: {
        options: {
          paths: ["src/shared/less/"]
          // cleancss: true
        },
        files: {
          "dist/css/<%= pkg.name %>.css": "src/less/main.less"
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'concat']
      },
      less: {
        files: 'src/**/*.less',
        tasks: ['less:development', 'csslint'],
        options: {
          livereload: false
        }
      },
      css: {
        files: 'dist/css/<%= pkg.name %>.css'
      },
      templates: {
        files: ['src/*.html', 'index.html']
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