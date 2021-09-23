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

document.getElementById("tenpaybtn").onclick = function() {
  openDialog(DATA.tenpay);
};

document.getElementById("wechatpaybtn").onclick = function() {
  openDialog(DATA.wechatpay);
};

document.getElementById("alipaybtn").onclick = function() {
  openDialog(DATA.alipay);
};

window.onload = function() {
  document.getElementById("qrcodeclose").click();
  // 如果设置了支付宝直达链接，默认吊起支付宝
  // 使用 location.assign 兼容 ios safari 跳转
  // 加 try 是为了避免可能的阻塞
  try {
    let open_url = DATA.alipay.open_url;
    if (open_url) open_url && location.assign(open_url);
  } catch (e) {}
  // 如果是微信，则默认打开微信
  if (isWechat) document.getElementById("wechatpaybtn").click();
};
