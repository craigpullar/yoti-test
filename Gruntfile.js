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
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'./client/css/main.css': './client/css/main.sass'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('push', function(args) {

		grunt.task.run(['gitadd', 'release:'+args]);

	});

};
