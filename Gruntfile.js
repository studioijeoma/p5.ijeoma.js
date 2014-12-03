module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/p5.ijeoma.js'],
                dest: 'build/p5.ijeoma.js',
            },
        },
        uglify: {
            build: {
                src: 'build/p5.ijeoma.js',
                dest: 'build/p5.ijeoma.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js', 'examples/*.html'],
                tasks: ['concat', 'uglify'],
                options: { 
                    spawn: false,
                    livereload: true, 
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};