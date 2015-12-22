/* global process */
'use strict';

var spawn = require('child_process').spawn;

module.exports = function(rootPath){
  
  var dirToChangeTo = __dirname + '\\lib\\bin';
	process.chdir(dirToChangeTo);

	process.env['NO_PAUSE'] = true;
	
  var args = process.argv.slice(2);
	
  for(var i = 0; i < args.length; i++) {
    args[i] = args[i].replace('@root', rootPath);
  }
  
	var child = spawn('gatling.bat', args);
	
  process.on('exit', function() {
    child.kill();
  });
  
	child.stdout.on('data', function(chunk){
		console.log(chunk.toString()); 
	});
	
	child.stderr.on('data', function(chunk){
		console.log(chunk.toString()); 
	});
}