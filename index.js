import Qrcode from "qrcode";
const { createCanvas, loadImage } = require("canvas");

var parser = require("ua-parser-js");
const ua = parser(navigator.userAgent);
console.log(ua);

async function showqrcode(url) {
  document.getElementById("showqrcode").style.display = "flex";
  const canvas = createCanvas(320, 320);
  Qrcode.toCanvas(
    canvas,
    url,
    {
      width: 320,
      height: 320,
    },
    function(error) {
      if (error) console.error(error);
      console.log("success!");
    }
  );
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  const image = await loadImage(DATA.qrlogo);
  ctx.drawImage(image, 138, 138, 44, 44);
  return canvas.toDataURL("image/png");
}

function closeqrcode() {
  document.getElementById("currentqrcode").innerHTML = "";
  if (document.getElementById("showqrcode").style.display == "flex")
    document.getElementById("showqrcode").style.display = "";
}

document.getElementById("qrcodeclose").onclick = closeqrcode;

async function openDialog(obj) {
  let dataURL = await showqrcode(obj.url);
  document.getElementById("currentqrcode").src = dataURL;
  document.getElementById("titleinfo").innerHTML = obj.othertitle;
  if (ua.browser.name == "QQ") {
    // QQ内浏览器：长按图片可下载，但无法点击下载按钮（iOS无法完成下载，但长按图片可保存；安卓会保存到下载而非相册）
    // 应对方案：引导浏览器打开，提醒长按图片保存，不设置下载按钮
    document.getElementById("titleinfo").innerHTML = obj.othertitle;
  } else if (ua.browser.name == "WeChat") {
    // 微信内浏览器：微信图片可长按直接调起支付码，但无法点击下载按钮
    // 应对方案：取消保存图片，仅能使用微信支付
    document.getElementById("titleinfo").innerHTML = DATA.wechatpay.wechattitle;
    saveqrbtn.style.display = "none";
    document.getElementById("qrcodeclose").style.display = "none";
    document.getElementById("openinbrower").style.display = "block";
  } else if (
    ua.os.name == "iOS" ||
    ["MIUI Browser", "UCBrowser", "Quark", "baidu"].indexOf(ua.browser.name) !=
      -1
  ) {
    // iOS好多下载不正常的浏览器
    // 例如：Safari/Firefox/Chrome/Edge/QQBrower：iOS端不正常，无法完成下载，但长按图片可保存（估计safari内核整体不支持）
    // 安卓下也有下载不正常的浏览器
    // 例如：MIUI浏览器/UC浏览器/Quark浏览器/百度浏览器：无法完成下载，但长按图片可保存
    // 不过：Chrome/Firefox/QQ浏览器/Edge：正常完成下载（估计用的都是版本比较先进的Chrome内核）
    // 应对方案：提醒长按图片保存，不设置下载按钮
    document.getElementById("titleinfo").innerHTML = obj.othertitle;
  } else {
    //正常情况，出现保存图片按钮
    document.getElementById("titleinfo").innerHTML = obj.title;
    let saveqrbtn = document.getElementById("saveqrbtn");
    saveqrbtn.style.display = "inline-block";
    saveqrbtn.innerHTML = obj.savetext;
    // 我也不知道下面两个写法哪个对
    // saveqrbtn.href = dataURL.replace("image/png", "image/octet-stream");
    saveqrbtn.href = dataURL;
    saveqrbtn.download = "qrcode.png";
  }
}

let toappbtn = document.getElementById("toappbtn");

if (DATA.alipay) {
  document.getElementById("alipaybtn").onclick = function() {
    toappbtn.style.display = "none";
    let open_url = DATA.alipay.open_url;
    if (open_url) open_url && location.assign(open_url);
    openDialog(DATA.alipay);
  };
}

if (DATA.wechatpay) {
  document.getElementById("wechatpaybtn").onclick = function() {
    if (ua.os.name == "iOS" && ua.browser.name != "WeChat") {
      toappbtn.style.display = "";
      toappbtn.href = "weixin://scanqrcode";
      toappbtn.innerHTML = DATA.wechatpay.toapptext;
    }
    openDialog(DATA.wechatpay);
  };
}

if (DATA.tenpay) {
  document.getElementById("tenpaybtn").onclick = function() {
    if (ua.os.name == "iOS" || ua.os.name == "Android") {
      toappbtn.style.display = "";
      toappbtn.href = "mqq://qrcode/scan_qrcode?version=1&src_type=app";
      toappbtn.innerHTML = DATA.tenpay.toapptext;
    }
    openDialog(DATA.tenpay);
  };
}

window.onload = function() {
  document.getElementById("qrcodeclose").click();
  // 如果设置了支付宝直达链接，默认吊起支付宝
  // 使用 location.assign 兼容 ios safari 跳转
  let reg = new RegExp("(^|&)open=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null && r[2] == "true" && DATA.alipay) {
    console.log("instant open set to true");
    let open_url = DATA.alipay.open_url;
    if (open_url) open_url && location.assign(open_url);
  }
  // UA 调试用
  // alert(ua.browser.name);
  // alert(ua.os.name);

  // 针对QQ直接出拦截
  // 反正也没人用QQ钱包，关键问题是QQ还只能长按保存，不能直接调起支付宝
  if (ua.browser.name == "QQ") {
    document.getElementById("tip-img").src =
      "https://i.loli.net/2019/06/25/5d11d9c19065848452.png";
    document.getElementById("tip").style.display = "block";
  }

  // 如果是微信且支持微信支付，则默认打开微信，微信可以直接识别付款码
  if (DATA.wechatpay) {
    if (ua.browser.name == "WeChat")
      document.getElementById("wechatpaybtn").click();
  }
};
