module.exports = function(grunt) {



	grunt.initConfig({
		release: {
			options: { 

				folder : '/',
				npm: false,
				npmtag: false
			}
		},
		gitadd: {
			task: {
				options: {
					force: false,
					all: true
				},
				
			}
		}

	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.registerTask('push', function(args) {

		grunt.task.run(['build','gitadd', 'release:'+args]);

	});

};
