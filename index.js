import Qrcode from "qrcode";
const ua = navigator.userAgent;
const isWechat = /micromessenger/i.test(ua);

function showqrcode(qrcode) {
  document.getElementById("showqrcode").style.display = "flex";
  Qrcode.toDataURL(
    qrcode,
    {
      width: 320,
      height: 320,
    },
    function(err, url) {
      document.getElementById("currentqrcode").src = url;
    }
  );
}

function closeqrcode() {
  document.getElementById("currentqrcode").innerHTML = "";
  if (document.getElementById("showqrcode").style.display == "flex")
    document.getElementById("showqrcode").style.display = "";
}

document.getElementById("qrcodeclose").onclick = closeqrcode;

function openDialog(obj) {
  document.getElementById("titleinfo").innerHTML = obj.title;
  showqrcode(obj.url);
}

if (DATA.alipay) {
  document.getElementById("alipaybtn").onclick = function() {
    let open_url = DATA.alipay.open_url;
    if (open_url) open_url && location.assign(open_url);
    openDialog(DATA.alipay);
  };
}

if (DATA.wechatpay) {
  document.getElementById("wechatpaybtn").onclick = function() {
    openDialog(DATA.wechatpay);
  };
}

if (DATA.tenpay) {
  document.getElementById("tenpaybtn").onclick = function() {
    openDialog(DATA.tenpay);
  };
}

window.onload = function() {
  document.getElementById("qrcodeclose").click();
  // 如果设置了支付宝直达链接，默认吊起支付宝
  // 使用 location.assign 兼容 ios safari 跳转
  if (DATA.alipay) {
    let open_url = DATA.alipay.open_url;
    if (open_url) open_url && location.assign(open_url);
  }
  // 如果是微信，则默认打开微信
  if (DATA.wechatpay) {
    if (isWechat) document.getElementById("wechatpaybtn").click();
  }
};
