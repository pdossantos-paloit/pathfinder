module.exports = function(grunt) {
	// Definition of constants
	var ALL_INTERNAL_JS = "/**/*.js";
	var JS_IN_SRC = "js" + ALL_INTERNAL_JS;
	var JS_IN_TEST = "tests" + ALL_INTERNAL_JS;

	var ALL_JS_FILES = [ "Gruntfile.js", JS_IN_SRC, JS_IN_TEST ];
	
	// Project configuration
	grunt.initConfig( {
		pkg: grunt.file.readJSON( "package.json" ),

		jasmine: {
			src: JS_IN_SRC,
			options: {
				specs: JS_IN_TEST
			},
		},

		jshint: {
			options: {
				jshintrc: ".jshintrc"
			},
			all: ALL_JS_FILES
		},

		watch: {
			scripts: {
				files: ALL_JS_FILES,
				tasks: [ "jasmine" ]
			}
		},
		
		uglify: {
			target: {
				files: {
					"pathfinder.min.js": [ JS_IN_SRC ]
				}
			}
		}
	} );

	// Load plugins
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-jasmine" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );

	// Default task
	grunt.registerTask( "default", [ "jshint" ] );
};