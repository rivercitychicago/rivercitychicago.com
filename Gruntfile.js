var SFTP_AUTH = {
  host: 'dev.squarespace.com',
  port: 2030,
  authKey: 'production',
};

function cacheFile(name) {
  return './tmp/grunt-sftp-deploy-cache--' + name + '.json';
}


module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'sftp-deploy': {
      production: {
        auth: SFTP_AUTH,
        cache: cacheFile('production'),
        // cache: false,
        concurrency: 8,
        src: '.',
        dest: '/rivercitychicago',
        exclusions: [
          '.*',
          '.sqs-cache/**/*',
          './package.json',
          './Gruntfile.js',
          './src/**/*',
          './tmp/**/*',
          './webpack/**/*',
          './node_modules/**/*',
        ],
      },
    },

    watch: {
      scripts: {
        files: [
          // '**/*.js',
          '**/*.(conf|block|list|item|page)',
          'assets/*',
          'scripts/*',
          'styles/*',
          '!**/node_modules/**',
        ],
        tasks: ['sftp-deploy'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-sftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks.
  grunt.registerTask('deploy', ['sftp-deploy']);
  // grunt.registerTask('sync', ['sftp-deploy', 'watch']);

};
