document.addEventListener('DOMContentLoaded', init);

function init() {
	document.getElementById('nfc_check').addEventListener('click', nfc_check_click);
}

function nfc_check_click(){
	Android.showMessage("HELLO WORLD");
}
