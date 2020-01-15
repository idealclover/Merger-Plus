<?php

$wechat_first = false;
$alipay_code = "FKX00710CQCHIHK4B9CA31";

require_once "lib/Mobile_Detect.php";

$detect = new Mobile_Detect;

if (!$detect->isMobile() || $detect->isTablet()) {
    // 如果是平板/电脑 展示二维码图片
    header("Location: ./qr/pay.png");
    // Any code should not run after redirect.
    exit;
}

$ua = $_SERVER['HTTP_USER_AGENT'];

if (strpos($ua, 'MicroMessenger')) {
    // 对微信的特殊关照：引导扫码支付及浏览器打开
    echo ("<html><img src='./static/wechat_pay.png' style='width: 100%'></img></html>");
    exit;
} elseif (strpos($ua, 'AlipayClient')) {
    // 对支付宝的特殊关照：直接调用支付宝
    header("Location: alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/" . $alipay_code);
    exit;
} elseif (strpos($ua, 'QQ/')) {
    // 对 QQ 的特殊关照
    if ($detect->is('iOS')) {
        // 注：iOS 版本 QQ 禁止空网页使用 safari 跳转
        echo ("<html><img src='./static/qq_ios.png' style='width: 100%'></img></html>");
        exit;
    } else {
        // 默认为安卓
        echo ("<html><img src='./static/qq_android.png' style='width: 100%'></img></html>");
        exit;
    }
} else {
    // 正常浏览器，直接调用支付宝/出支付二维码
    if ($wechat_first) {
        // 调取微信支付
        header("Location: ./qr/wechat_pay.png");
        exit;
    } else {
        header("Location: alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/" . $alipay_code);
        exit;
    }
}
