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

	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-git');



	//git
	grunt.registerTask('version', function(args) {
		grunt.task.run(['gitadd', 'release:'+args]);
	});


};