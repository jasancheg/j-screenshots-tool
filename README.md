> Basic cross platform desktop application

J v0.0.1

A new and easy way to make QA in your websites. The tool allow you to take screeshots in different browsers using your installed web browsers or you also can configure a service like BrowserStack or SauceLabs.

- compare your website in different browsers 
- you can obtain, check and easily export results
- find visual differences in the most efficient, fast and safe way
- build projects and lists that you can reuse to perform Unit Test in your site
- use your lists to perform QA processes with just one click
- set your test at a specific time
- nice user interface

(currently working on it...)


## What is this repository for? ###

* source code for distribution
* executables for distribution


## How do I get set up? ###

### Features

- Cross platform desktop application built with Electron (Mac OS, Windows, Linux)
- Rest API built with Sailsjs (server App)
- User interface built in Angularjs (client App)
- *NeDB*, embedded persistent database with no dependency(except npm modules)
- User authentication and session control (JWT, register, login, logout)
- Simple Dashboard
- Custom context menu
- Grunt automatization, `compass, jshint, bower injection, watch, build, start the app, others...`

## Dev

For use the [electron-packager](https://github.com/maxogden/electron-packager) cli
```
npm i electron-packager -g
```

install root dependencies

```
$ npm install
```

install the server app dependencias (sails)

```
$ cd app/server
$ npm install
```

### Dev Tools

Toggle Dev Tools. Debug features using [electron-debug](https://github.com/sindresorhus/electron-debug).

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd>

### Reload

Force reload the window.

- OS X: <kbd>Cmd</kbd> <kbd>R</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>R</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>R</kbd>

### Run

```
$ npm start
```

**or** directly run
```
$ grunt start
```

**or** run with developer tools open from the begining
```
$ npm run startd
```

### Build

- Build all bundles: `$ npm run build`
- Build Mac os bundle: `$ npm run build-mac`
- Build Windows 32: `$ npm run build-win32`
- Build Windows 64: `$ npm run build-win64`
- Build linux 32: `$ npm run build-linux32`
- Build linux 64: `$ npm run build-linux64`

Builds the app for OS X, Linux, and Windows, using [electron-packager](https://github.com/maxogden/electron-packager).

## Issue Submission
comming soon (not sure)

## Need help? Tutorial
comming soon

## Feature Requests

This project will not be continued and will no longer maintained. It was a contribution by the Developer in charge, but you could try submitting a comment or provide feedback through the people involved in the project and we will be glad to hear your comments and if it is possible I will attend the need. For it check the contributors.txt file.

## Support
Need help or have a question?

##### App dependencies, inheritance and relationships between libraries

**Bower dependencies**
```js
─┬── [J server App v0.0.1]
 └──┬──┬ angular v1.4.7
    │  ├── angular-animate v1.4.7
    │  ├── angular-mocks v1.4.7
    │  ├── angular-route v1.4.7
    │  ├── angular-sanitize v1.4.7
    │  ├── extras.angular.plus v0.9.3
    │  ├── satellizer v0.13.0
    │  ├─┬ angular-sails v1.1.4
    │  │ └── sails.io.js v0.11.7
    │  └─┬ restangular v1.5.1
    │    └── lodash v3.10.1
    ├──┬ lumx v0.3.95
    │  ├── angular v1.4.7
    │  ├── bourbon v4.2.6
    │  ├── jquery v2.1.4
    │  ├── mdi v1.3.41
    │  ├── moment v2.10.6
    │  └─┬ velocity v1.2.3
    │    └── jquery v2.1.4
    ├─── lodash v3.10.1
    └─── jquery v2.1.4
```

**NPM dependencies**
```js
─┬── [J server App v0.0.1]
 └──┬── Main dependencies
    └─┬── electron-packager @5.0.1
      ├── electron-debug @0.1.1
      ├── jquery @2.1.4
      ├─┬ sails.io.js @0.11.6
      │ └── socket.io-client @1.3.6
      ├── crypto @0.0.3
      ├── jwt-simple @^0.3.1
      ├── machinepack-gravatar @^1.2.0
      ├── machinepack-passwords @^2.3.0
      ├── moment @^2.10.6
      ├─┬ nodemailer @^1.8.0
      │ └── nodemailer-smtp-transport @^1.0.3
      ├─┬ passport @^0.3.0
      │ └── passport-local @^1.0.0
      ├── querystring @^0.2.0
      ├── request @^2.65.0
      └─┬ sails @^0.11.0
        ├── rc @^1.1.0
        └── sails-nedb @^0.10.0
```

Scaffolding the application

![](https://raw.githubusercontent.com/jasancheg/j-screenshots-tool/master/b-analysis/j-app.png)

## License

MIT © [Jose Antonio Sanchez](https://github.com/jasancheg)