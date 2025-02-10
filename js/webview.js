document.addEventListener('DOMContentLoaded', init);

function init() {
	document.getElementById('nfc_check').addEventListener('click', nfc_check_click);
	Android.jsAppVersion('v1.0.0');
}

function nfc_check_click(){
	const msg_text = document.getElementById('msg_text');
	msg_text.textContent = "読み込み開始";
	const res = Android.startNFC();
	console.log(res);
	msg_text.textContent = res;
}
function showIDm(idm){
	const msg_text = document.getElementById('msg_text');
	msg_text.textContent = idm;
}
