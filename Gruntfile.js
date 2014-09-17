module.exports = function(grunt) {
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        uglify: {
            build: {
                src: 'build/p5.ijeomamotion.js',
                dest: 'build/p5.ijeomamotion.min.js'
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
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'watch']);
};