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
					'./client/css/deploy.css': './client/css/main.sass'
				}
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['es2015']
			},
			dist: {
				files: {
					'./client/js/deploy.js': './client/js/deploy.js'
				}
			}
		},
		browserify:     {
			dist : {
				options:      {
					transform: [['babelify', {presets: ['es2015', 'react']}]]
				},
				src: ['./client/js/app.js'],
				dest: './client/js/deploy.js'
			}
		},
		hapi: {
			custom_options: {
				options: {
					server: './server/server.js',
					bases: {
						'/': '.'
					}
				}
			}
		},
		watch: {
			scripts: {
				files: ['./client/js/!(deploy).js'],
				tasks: ['build:js'],
				options: {
					spawn: false,
				},
			},
			browserify: {
				files: ['.client/js/!(deploy).js'],
				tasks: ['browserify']
			}

		},
		shell: {
			options: {
				stderr: false
			},
			target: {
				command: 'nodemon ./server/server.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-hapi');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	//js 
	grunt.registerTask('build:js', ['browserify']);


	//css
	grunt.registerTask('build:css', ['sass']);

	//Build client files
	grunt.registerTask('build', ['build:css', 'build:js']);

	//git
	grunt.registerTask('version', function(args) {
		grunt.task.run(['gitadd', 'release:'+args]);
	});

	//Start
	grunt.registerTask('server', ['shell']);

};
