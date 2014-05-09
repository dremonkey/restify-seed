'use strict';

module.exports = function (grunt) {

  // Look for grunt config files in the 'grunt' directory
  // Uses load-grunt-tasks to load tasks
  require('load-grunt-config')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // ## Register all Grunt Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run([
        'build',
      ]);
    }

    grunt.task.run([
      'newer:jshint:all',
      'build',
      'concurrent:serve'
    ]);
  });

  grunt.registerTask('build', []);

  grunt.registerTask('heroku', [
    'newer:jshint:all',
    'build',
    'copy:heroku'
  ]);

  grunt.registerTask('azure', [
    'newer:jshint:all',
    'build',
    'copy:azure'
  ]);
};
