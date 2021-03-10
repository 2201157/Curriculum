var $body = document.getElementsByTagName('body')[0];
var $btnCopy = document.getElementById('btnCopy');
var secretInfo = document.getElementById('secretInfo').innerHTML; //email a ser copiado

var copyToClipboard = function(secretInfo) {

    var $tempInput = document.createElement('INPUT');

    $body.appendChild($tempInput);

    $tempInput.setAttribute('value', secretInfo)

    $tempInput.select();

    document.execCommand('copy');

    $body.removeChild($tempInput);

  }	

      $btnCopy.addEventListener('click', function(ev) {
        copyToClipboard(secretInfo);
        alert("Email Copiado");
      });

