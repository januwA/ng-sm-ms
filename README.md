# SmMs

![](./src/assets/logo.png)

[sm.ms](https://sm.ms)图床

[Andorid 版本](https://github.com/januwA/flutter_sm_ms_app)


- [x] 必须登录
- [x] 用户登录
- [x] 用户注册
- [x] 删除历史图片
- [x] 图片上传
- [x] 显示上传的历史图片
- [x] 登陆用户基本信息

## 全局安装 electron

> $ npm i -g electron electron-builder

无法安装?
```sh
$ vim ~/.npmrc
```
```
ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/"
```

安装完成后将`package.json`中的electron更新到全局一样的版本


## linux 打包
```sh
$ export ELECTRON_BUILDER_BINARIES_MIRROR=https://mirrors.huaweicloud.com/electron-builder-binaries/
$ npm run e-linux
```

## linux install
```sh
$ sudo snap install ./ng-sm-ms_0.5.1_amd64.snap  --dangerous
```

See also:

- `ng e-win`设置`"baseHref": "./"`， `ng serve`设置`"baseHref": "/"`
- [Electron](https://electronjs.org/)
- [electron-build](https://www.electron.build/)
- [手动下载 electron](https://npm.taobao.org/mirrors/electron)
- [electron-builder 打包失败](https://blog.csdn.net/qq_32682301/article/details/105234408)
  > 手动下载 electron 到 C:\Users\username\AppData\Local\electron\Cache\
