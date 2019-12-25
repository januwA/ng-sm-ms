# SmMs

[sm.ms](https://sm.ms)图床

[Andorid 版本](https://github.com/januwA/flutter_sm_ms_app)


- [x] 必须登录
- [x] 用户登录
- [x] 用户注册
- [x] 删除历史图片
- [x] 图片上传
- [x] 显示上传的历史图片
- [x] 登陆用户基本信息

## 需要全局安装
`$ yarn global add electron electron-builder`

- [Electron](https://electronjs.org/)
- [electron-build](https://www.electron.build/)
- [手动下载Electron](https://npm.taobao.org/mirrors/electron)


注意事项:

- 只做`win`如果需要其它平台，可以运行`npm run e-mwl`，更多打包配置可以看[https://www.electron.build/](https://www.electron.build/)
- `npm run e-build` 需要关闭编辑器，不然显示进程被占用
- `ng build`设置`"baseHref": "./"`， `ng serve`设置`"baseHref": "/"`
- `electron`项目需要在`packages.json`设置`"main": "main.js"`字段
- 务必做好[发行版本控制](https://semver.org/lang/zh-CN/)
- 使用`github pages`设置为`--base-href=./`