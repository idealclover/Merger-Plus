# Click-to-Donate

> 💸 我很可爱，请给我钱 ww

一键打钱（大误）提供一键从浏览器跳转至支付宝/微信支付的能力，帮助个人开发者完成打赏功能实现。

> 示例页面： **[快来打钱快来打钱～疯狂暗示 wink 😘](https://donate.new.idealclover.cn)**

- PC 端显示效果

![PC](https://i.loli.net/2021/09/24/bDRBvuknsKTpafW.png)

- 移动端显示效果

<img src="https://i.loli.net/2021/09/24/L8vdo1c9uRfmAq6.png" width="250">

本项目基于 [hifocus/merger](https://github.com/hifocus/merger) 上开发 ~~但其实基本把大部分代码都重新写了个遍~~ 在项目基础上实现的 Feature：

- JSON 文件轻松配置 三分钟搭建自己的捐赠页
- 移动端支持加载时/选择支付宝时直接调起支付宝，无法调起时不影响其他方式投喂
- 微信内打开直接调起微信二维码，长按扫描即可投喂
- 小改了一下页面的样式，能更显著显示投喂按钮
- 大改了实现逻辑，生成页面更静态，性能更好

![](https://i.loli.net/2021/09/26/LenDzqSHZsMgNrF.png)

## 快速开始

提前安装 [yarn](https://yarnpkg.com/)

```sh
# 安装依赖
yarn

# 开发
yarn dev

# 构建
yarn build
```

之后在 `dist` 目录即为成品

## 页面信息配置

修改 config.json 即可配置页面信息，修改后重新执行 yarn dev 即可看到效果。

当然，您也可以对页面 HTML 进行拓展，页面使用 [EJS 模版](https://ejs.bootcss.com/)。

```javascript
{
  "profile": "https://image.idealclover.cn/blog/assets/icon.png", //头像
  "name": "idealclover", //主标题
  "description": "来给翠翠投喂棒棒糖吧🍭", //副标题
  "qrlogo": "statics/icon.png", //二维码上logo，可不要
  "alipay": { //支付宝钱包，没有可以去掉
    "title": "😘支付宝扫一扫 投喂翠翠", //支付包钱包弹窗标题
    "othertitle": "长按图片保存，在支付宝打开<br />😘感谢投喂翠翠", //针对无法下载情况的标题
    "url": "https://qr.alipay.com/FKX00710CQCHIHK4B9CA31", //支付宝钱包跳转链接
    "open_url": "alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/FKX00710CQCHIHK4B9CA31" //支付宝deeplink
    "savetext": "保存二维码" //保存按钮文案
  },
  "wechatpay": { //微信钱包 没有可以去掉
    "title": "微信扫一扫 投喂翠翠", //微信钱包弹窗标题
    "othertitle": "长按图片保存，在微信打开<br />😘感谢投喂翠翠", //针对无法下载情况的标题
    "url": "wxp://f2f06W7B_VcXSogUH73o9rPpeEs2jsGfVtr0" //微信钱包跳转链接
    "savetext": "保存二维码" //保存按钮文案
    "wechattitle": "长按图片扫一扫 投喂翠翠", //微信专用，微信二维码在微信内打开的标题
    "wechattext": "如使用其他方式付款，请点击右上角<br />并选择”在浏览器打开“" //微信专用，微信二维码在微信内打开的文案
  },
  "tenpay": { //QQ钱包 没有可以去掉
    "title": "QQ手机版扫一扫 投喂翠翠", //QQ钱包弹窗标题
    "othertitle": "长按图片保存，在手机QQ打开<br />😘感谢投喂翠翠", //针对无法下载情况的标题
    "url": "https://vac.qq.com/wallet/qrcode.htm?m=tenpay&a=1&u=1455169173&ac=BE7F6A40B177C4558EAF9F8049F4A5BF5596E6985312BE2A2C574D0C8B1B593E&n=504%20Gateway%20Timeout&f=wallet" //QQ钱包跳转链接
    "savetext": "保存二维码" //保存按钮文案

  },
  "paypal": { //paypal钱包，没有可以去掉
    "url": "https://www.paypal.com/paypalme/idealclover?locale.x=zh_XC" //paypal链接
  }
}
```

## Open Source License

This project is under [GNU General Public License v3.0](./LICENSE).

Based on following open source projects:

- [hifocus/merger](https://github.com/hifocus/merger)
- [Automattic/node-canvas](https://github.com/Automattic/node-canvas)
- [soldair/node-qrcode](https://github.com/soldair/node-qrcode)
- [faisalman/ua-parser-js](https://github.com/faisalman/ua-parser-js)
