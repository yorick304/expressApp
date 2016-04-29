module.exports=function(grunt){
   // 配置Grunt各种模块的参数
  grunt.initConfig({

    pkg:grunt.file.readJSON("package.json"),
    watch: {
        express: {
          files:  ['routes/*.js','public/javascript/*.js'],
          tasks:  [ 'express:dev' ],
          options: {
            nospawn: true 
            }
        }
    },
    express:{
      options:{},
      dev:{
        options:{
            script:"./bin/www"
          }
      }
    },
    jshint: {
      options: {
          eqeqeq: true,
          trailing: true
      },
      files: ['Gruntfile.js', 'routes/*.js','public/javascript/*.js']
    }

  });
   // 从node_modules目录加载模块文件
  grunt.loadNpmTasks("grunt-express-server");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  // 每行registerTask定义一个任务
  grunt.registerTask("local",['express:dev',"watch","jshint"]);
}