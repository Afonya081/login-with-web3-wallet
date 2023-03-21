/**
 * VladimirGav
 * GitHub Website: https://vladimirgav.github.io/
 * GitHub: https://github.com/VladimirGav
 * Copyright (c)
 */

const web3 = new Web3("https://etherscan.io");
document.addEventListener('click', function OnClick(event) {
    var $this = event.target;

    var ActionNameClass = 'LoginWeb3Button';
    if ($this.classList.contains(ActionNameClass)) {
        event.preventDefault();

        var userContentUrl = $this.getAttribute('data-user-content-url');
        var web3AuthUrl = $this.getAttribute('data-user-auth-url');

        if (typeof window.ethereum !== 'undefined') {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((accounts) => {
                    if (typeof accounts[0] !== 'undefined'){
                        var formData = new FormData();
                        formData.append('web3-wallet', accounts[0]);
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
                })
                .catch((error) => {
                    console.log('error: '+error);
                });
        } else {
            alert('MetaMask, Trust Wallet, Coinbase Wallet not installed! ');
        }

        return false;

    }
});