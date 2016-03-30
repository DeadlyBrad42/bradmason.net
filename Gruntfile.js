module.exports = function(grunt) {
    'use strict';

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: {
                    './styles/portfolio.css': './styles/portfolio.less' // 'destination file': 'source file'
                },
                options: {
                    compress: true,
                    yuicompress: true
                }
            }
        },
        watch: {
            files: './styles/**/*.less',
            tasks: ['less:build'],
            options: {
                spawn: false,
                debounceDelay: 250
            }
        },
        express: {
            options: {
                // Override defaults here
            },
            web: {
                options: {
                    script: 'server.js',
                    output: ''
                }
            },
            dev: {
                options: {
                    script: 'server.js',
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    // Default task(s).
    grunt.registerTask('default', ['less:build', 'express:web']);
    grunt.registerTask('dev', ['less:build', 'express:dev', 'watch']);
};
