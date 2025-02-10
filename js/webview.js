document.addEventListener('DOMContentLoaded', init);

function init() {
	document.getElementById('nfc_check').addEventListener('click', nfc_check_click);
}

function nfc_check_click(){
	const msg_text = document.getElementById('msg_text');
	msg_text.textContent = "読み込み開始";
	const res = Android.showMessage("HELLO WORLD");
	msg_text.textContent = res;
}
