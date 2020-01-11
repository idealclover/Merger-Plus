<?php

$wechat_first = false;

require_once "libs/Mobile_Detect.php";

$detect = new Mobile_Detect;

if(!$detect->isMobile() || $detect->isTablet()){
    // 如果是平板/电脑 展示二维码图片
    header("Location: ./static/pay.png");
    // Any code should not run after redirect.
    exit;
}

$ua = $_SERVER['HTTP_USER_AGENT'];

if (strpos($ua, 'MicroMessenger')) {
    // 对微信的特殊关照：引导扫码支付及浏览器打开
    echo("wechat");
} elseif (strpos($ua, 'AlipayClient')) {
    // 对支付宝的特殊关照：直接调用支付宝
    echo('alipay');
    // header('location: ' . $res['alipay']);
    // exit();
} elseif (strpos($ua, 'QQ/')) {
    // 对 QQ 的特殊关照
    echo('qq');
} else {
    // 正常浏览器，直接调用支付宝/出支付二维码
    if(wechat_first){

    } else{

    }
}

