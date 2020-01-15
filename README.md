# Click-to-Donate

> 💸我很可爱，请给我钱 ww

一键打钱（大误）提供一键从浏览器跳转至支付宝/微信支付的能力，帮助个人开发者完成打赏功能实现。

## 实现思路与策略

实现思路：UA 识别 + 重定向跳转，根据所使用的操作系统及浏览器内核不同，跳转至不同的方式

实现策略：

* 电脑/平板：展示支付宝，微信支付二维码，方便手机进行扫描

* 微信浏览器内核：展示微信支付二维码，方便长按直接识别二维码进行打赏

* QQ 浏览器内核：展示引导图片，引导至浏览器中进行打开

* 支付宝浏览器内核：直接跳转打开支付宝收款

* 其他手机浏览器内核：直接跳转打开支付宝收款

测试链接：[https://donate.idealclover.cn](https://donate.idealclover.cn)

## 如何部署

1. star 并 clone 本项目
2. 替换 ```qr/```  目录下的二维码
   1. ```qr/pay.png``` ：电脑端显示的全平台收款码，建议使用 PS 合成或使用 [收款啦](https://qr.52ecy.cn/) 合成
   2. ```qr/wechat_pay.png``` ：微信端显示的微信收款码，建议使用微信原生收款码
3. 替换 ```index.php``` 中第 4 行的 ```$alipay_code``` 获取方式：支付宝收款码经二维码识别后的 token
4. 部署目录至 PHP 环境

## 测试情况

|               | 硬件机型                | 软件版本             | 测试情况 |
| ------------- | ----------------------- | -------------------- | -------- |
| 电脑          | Windows 10              | Chrome 79.0.3945.117 | 已测试   |
| 平板          | MIUI 10 - 小米平板 4    | Chrome 97.0.3945.116 | 已测试   |
| 手机 - 微信   | iOS 13.3 - iPhone SE    | 微信 7.0.10          | 已测试   |
|               | MIUI 11 - RedMi K20 Pro | 微信 7.0.10          | 已测试   |
| 手机 - 支付宝 | iOS 13.3 - iPhone SE    | 支付宝 10.1.85       | 已测试   |
|               | MIUI 11 - RedMi K20 Pro | 支付宝 10.1.85       | 已测试   |
| 手机 - QQ     | iOS 13.3 - iPhone SE    | TIM v2.5.1.14        | 已测试   |
|               | MIUI 11 - RedMi K20 Pro | QQ v8.2.6.4370       | 已测试   |
|               |                         | TIM v2.3.1.1834      | 已测试   |
| 手机 - 浏览器 | iOS 13.3 - iPhone SE    | Safari               | 已测试   |
|               | MIUI 11 - RedMi K20 Pro | Chrome 97.0.3945.116 | 已测试   |

更多测试情况，欢迎在 [issue](https://github.com/idealclover/Click-to-Donate/issues) 中进行补充

## Open-source Licenses

This project is under MIT license, feel free to use it under the license.

Open-source dependencies:
* [Mobile-Detect](https://github.com/serbanghita/Mobile-Detect)

Long Live Open Source.



