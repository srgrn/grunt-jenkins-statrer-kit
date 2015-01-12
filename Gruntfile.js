module.exports = function(grunt) {
  var cred = grunt.file.readJSON('password')
  grunt.initConfig({
    jenkins: {
      serverAddress: 'http://192.168.2.45:8080'
    , username: cred.username                       // if only one of username and password
    , password: cred.password                    // are provided, no authentication attempted
    }
  });
  grunt.loadNpmTasks('grunt-jenkins');
};