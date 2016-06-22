var gulp = require('gulp');
gulp.task('default', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = './';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/!(node_modules)/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}','/','*.html'],
    stripPrefix: rootDir
  }, callback);
});
