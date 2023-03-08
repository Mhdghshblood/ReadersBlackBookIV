function encode() {
    var plaintext = document.getElementById("plaintext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var result = "";
    for (var i = 0; i < plaintext.length; i++) {
      var c = plaintext.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode(((c - 65 + shift) % 26) + 65);
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode(((c - 97 + shift) % 26) + 97);
      } else {
        result += plaintext.charAt(i);
      }
    }
    document.getElementById("result").value = result;
  }
  
  function decode() {
    var plaintext = document.getElementById("plaintext").value;
    var shift = parseInt(document.getElementById("shift").value);
    var result = "";
    for (var i = 0; i < plaintext.length; i++) {
      var c = plaintext.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode(((c - 65 - shift + 26) % 26) + 65);
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode(((c - 97 - shift + 26) % 26) + 97);
      } else {
        result += plaintext.charAt(i);
      }
    }
    document.getElementById("result").value = result;
  }
  