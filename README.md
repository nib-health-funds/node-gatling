#npm-gatling
NPM wrapper around the gatling binaries. 

Sets the correct working directory for gatling to run and invokes the ```gatling.bat``` file with all of the passed parameters.

##Usage
Simply install ```npm-gatling``` and call ```gatling``` as you would when using the original gatling binaries.

@root is replaced with the current working directory.
This helps us achieve relative file paths when running gatling from project directories.

```
  npm i npm-gatling --save
  gatling -s SimulationName -rf @root/results/ 
```

----------

See [the gatling docs](http://gatling.io/docs/2.0.0-RC2/general/configuration.html#command-line-options "http://gatling.io/docs/2.0.0-RC2/general/configuration.html#command-line-options") for a list of all the command line arguments.
