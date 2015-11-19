module.exports = function(grunt) {

  var banner = [
    "/*",
    "    <%= pkg.name %> <%= pkg.version %>",
    "",
    "    <%= pkg.name %> may be freely distributed under the MIT license.",
    "    For all details and documentation: <%= pkg.homepage %>",
    "",
    "*/"
  ].join('\n');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      main: {
        options: {
          banner: banner
        },
        files: {
          'throttle.min.js' : 'throttle.js'
        }
      }
    }
  });

  // Load modules.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Build
  grunt.registerTask('default', [
    'uglify'
  ]);
};