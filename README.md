# 支付宝小程序插件开发

## 安装依赖
```
yarn
```

## 运行

```
npm run dev:mp-ali-plugin
```

小程序 ide 直接打开根目录，在 `mini.project.json` 中映射了宿主环境和，插件目录。

宿主目录：miniprogram
插件编译目录：dist/dev/mp-alipay/miniprogram/plugin

## patch

目前 @dcloudio/webpack-uni-mp-loader 存在 bug，支付宝小程序无法运行，已经打了 patch，后续修复之后，移除 patch，不影响正常开发。
