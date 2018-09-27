module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),


		less: 
			{

			  production: {
			    options: 
				    {
					  
					  //paths: ['/'],
						sourceMap:true,
						sourceMapRootpath: '/assets/',
						sourceMapURL:'/assets/css/style.css.map'
				      /*plugins: // временно отлючаю плагины, т.к. sourcemap не работает с ними.
				      	[
				        new (require('less-plugin-autoprefix'))({browsers: ["last 3 versions"]}),
				        new (require('less-plugin-clean-css'))()
				        ],*/
				    },
			    files: 
				    {
				      'css/style.css': 'css/style.less'
				    }
			  }
			},

		watch:
			{
				css:
				{
					files:['css/*.less'],
					tasks:['less'],
					options: {
				      livereload: true,
				    }
				}
			} 		

	}); //end .initConfig

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');



	grunt.registerTask('default',['watch','less']);




}; //end wrap