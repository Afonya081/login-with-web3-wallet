/**
 * VladimirGav
 * GitHub Website: https://vladimirgav.github.io/
 * GitHub: https://github.com/VladimirGav
 * Copyright (c)
 */

let sWeb3AppClass = new sWeb3App();


async function actionLoginWeb3Button($this) {
    var userContentUrl = $this.getAttribute('data-user-content-url');
    var web3AuthUrl = $this.getAttribute('data-user-auth-url');

    var Web3WalletData = await sWeb3AppClass.setWeb3Wallet();
    if(Web3WalletData.error!=0){
        return Web3WalletData;
    }

    var currentAccount = Web3WalletData.RequestAccountsData.requestAccountsArr[0];
    var signMessage = Web3WalletData.checkSignData.SignData.signMessage;
    var signResult = Web3WalletData.checkSignData.SignData.signResult;

    var formData = new FormData();
    formData.append('web3-wallet', currentAccount);
    formData.append('signMessage', signMessage);
    formData.append('signResult', signResult);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", web3AuthUrl, true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var res = JSON.parse(xhr.response);
            if(res.error==1){
                console.log(res);
            }
            if(res.error==0){
                window.location.href = userContentUrl;
            }
        }
    }
    xhr.send(formData);
}

const web3 = new Web3("https://etherscan.io");
document.addEventListener('click', function OnClick(event) {
    var $this = event.target;

    var ActionNameClass = 'LoginWeb3Button';
    if ($this.classList.contains(ActionNameClass)) {
        event.preventDefault();
        actionLoginWeb3Button($this);
        return false;
    }
});