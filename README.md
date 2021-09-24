# Click-to-Donate

> 💸我很可爱，请给我钱 ww

一键打钱（大误）提供一键从浏览器跳转至支付宝/微信支付的能力，帮助个人开发者完成打赏功能实现。

- PC 端显示效果

![PC](https://sm.ms/image/bDRBvuknsKTpafW)

- 移动端显示效果

<img src="https://sm.ms/image/L8vdo1c9uRfmAq6" width="250">

- json 文件轻松配置 三分钟搭建自己的捐赠页
- 移动端支持直接调起支付宝，无法调起时不影响其他方式投喂
- 微信内打开直接调起微信二维码，长按扫描即可投喂

## 快速开始

```sh
# 安装依赖
yarn

# 开发
yarn dev

# 构建
yarn build
```

## 页面信息配置

修改 config.json 即可配置页面信息，修改后重新执行 yarn dev 即可看到效果。

当然，您也可以对页面 HTML 进行拓展，页面使用 [EJS 模版](https://ejs.bootcss.com/)。

```javascript
{
  "profile": "https://image.idealclover.cn/blog/assets/icon.png", //头像
  "name": "idealclover", //主标题
  "description": "来给翠翠投喂棒棒糖吧🍭", //副标题
  "alipay": { //支付宝钱包，没有可以去掉
    "title": "支付宝扫一扫 投喂翠翠", //支付包钱包弹窗标题
    "url": "https://qr.alipay.com/FKX00710CQCHIHK4B9CA31", //支付宝钱包跳转链接
    "open_url": "alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/FKX00710CQCHIHK4B9CA31" //支付宝deeplink
  },
  "wechatpay": { //微信钱包 没有可以去掉
    "title": "微信扫一扫 投喂翠翠", //微信钱包弹窗标题
    "url": "wxp://f2f06W7B_VcXSogUH73o9rPpeEs2jsGfVtr0" //微信钱包跳转链接
  },
  "tenpay": { //QQ钱包 没有可以去掉
    "title": "QQ手机版扫一扫 投喂翠翠", //QQ钱包弹窗标题
    "url": "https://vac.qq.com/wallet/qrcode.htm?m=tenpay&a=1&u=1455169173&ac=BE7F6A40B177C4558EAF9F8049F4A5BF5596E6985312BE2A2C574D0C8B1B593E&n=504%20Gateway%20Timeout&f=wallet" //QQ钱包跳转链接
  },
  "paypal": { //paypal钱包，没有可以去掉
    "url": "https://www.paypal.com/paypalme/idealclover?locale.x=zh_XC" //paypal链接
  }
}
```



## Open Source License

This project is under [GNU General Public License v3.0](./LICENSE).

Based on [hifocus/merger](https://github.com/hifocus/merger).


