# SmMs

[sm.ms](https://sm.ms)图床

- [x] 必须登录
- [x] 用户登录
- [ ] 用户注册
- [ ] 删除图片
- [ ] 图片上传
- [ ] 用户上传历史图片
- [ ] 用户基本信息


- [Electron](https://electronjs.org/)
- [electron-build](https://www.electron.build/)


注意事项:

- 只做 win
- `npm run e-build` 需要关闭编辑器，不然显示进程被占用
- `ng build`设置`"baseHref": "./"`， `ng serve`设置`"baseHref": "/"`
- `electron`项目需要在`packages.json`设置`"main": "main.js"`字段
- 务必做好[发行版本控制](https://semver.org/lang/zh-CN/)
