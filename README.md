# npm-gatling

npm wrapper around the gatling binaries.

Sets the correct working directory for gatling to run and invokes the ```gatling.bat``` file with all of the passed parameters.

The included gatling version is 2.2.3.

## Usage

Simply install ```npm-gatling``` and call ```gatling``` as you would when using the original gatling binaries.

### Install
```
  npm i npm-gatling --save
```

### Run
```
  gatling -s SimulationName -rf ~/results/
```

> Note: '~' is replaced with the current working directory.

> This helps us achieve relative file paths when running gatling from project directories.

----------

See [the gatling docs](http://gatling.io/docs/2.2.3/general/configuration.html#command-line-options "http://gatling.io/docs/2.2.3/general/configuration.html#command-line-options") for a list of all the command line arguments.
