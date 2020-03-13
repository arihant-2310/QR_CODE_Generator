function validate() {
  var text = document.getElementById("text");
  if (text.value == "") {
    alert("Text Box cannot be empty");
    document.getElementById("text").style.borderColor = "orange";
    return false;
  } else {
    document.getElementById("text").style.borderColor = "red";
    return true;
  }
}

function generateQR() {
  let qrcode = select("img");
  let qrtext = select("textarea");
  let qrbtn = select("button");
  let size = "1000x1000";
  let data = qrtext.value;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
}

function select(el) {
  return document.querySelector(el);
}
