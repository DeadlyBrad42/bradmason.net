module.exports = function(grunt) {
    'use strict';

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: {
                    "./styles/portfolio.css": "./styles/portfolio.less" // destination file and source file
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
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less:build']);
    grunt.registerTask('dev', ['less:build', 'watch']);
};
