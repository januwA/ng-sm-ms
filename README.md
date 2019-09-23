# SmMs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


- [Electron](https://electronjs.org/)
- [electron-build](https://www.electron.build/)


注意事项:

- 只做 win
- `npm run e-build` 需要关闭编辑器，不然显示进程被占用
- `ng build`设置`"baseHref": "./"`， `ng serve`设置`"baseHref": "/"`
- `electron`项目需要在`packages.json`设置`"main": "main.js"`字段
- 务必做好[发行版本控制](https://semver.org/lang/zh-CN/)
