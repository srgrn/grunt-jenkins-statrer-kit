module.exports = function(grunt) {
  var cred = grunt.file.readJSON('password')
  grunt.initConfig({
    jenkins: {
      serverAddress: cred.server
    , username: cred.username                       // if only one of username and password
    , password: cred.password                    // are provided, no authentication attempted
    }
  });
  grunt.loadNpmTasks('grunt-jenkins');
};
