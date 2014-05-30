module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "public/main.css": "public/main.less"
                }

            }
        },
        watch: {
            sripts: {
                files: ['public/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
