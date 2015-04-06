module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          angular: true
        }
      }
    },
    jasmine: {
      src: {
        src: [
          'node_modules/angular/angular.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'js/**/*.js'
        ],
        options: {
          specs: 'test/**/*.js'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint']);

};
