this simple repo contains the package.json and gruntfile to allow for backup using grunt-jenkins

USAGE INSTRUCTIONS:
* Install nodejs if it is not already installed

1. install grunt -- sudo npm install -g grunt-cli
2. clone this repo
3. go into repo directory
4. install dependancies -- npm install 
5. update password file to match your own needs
6. run grunt - grunt --help


in accordance with grunt-jenkins readme file you now have the following options

grunt jenkins-backup (backup jobs and plugins)
grunt jenkins-list (list jobs and plugins)
grunt jenkins-install (install jobs and plugins from backup)

Hope it helps 

