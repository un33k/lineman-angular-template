/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/bower/underscore/underscore.js",
        "vendor/bower/jquery/dist/jquery.js",
        "vendor/bower/angular/angular.js",
        "vendor/bower/angular-resource/angular-resource.js",
        "vendor/bower/angular-route/angular-route.js",
        "vendor/bower/angular-ui/build/angular-ui.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    },

    less: {
      compile: {
        options: {
          paths: [
            "vendor/bower/normalize-css/normalize.css",
            "vendor/css/**/*.css",
            "app/css/**/*.less"
          ]
        }
      }
    }
  };
};
