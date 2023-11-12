<?php
/**
 * VladimirGav
 * GitHub Website: https://vladimirgav.github.io/
 * GitHub: https://github.com/VladimirGav
 * Copyright (c)
 */

// start session
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// check web3 authorization

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit(json_encode(['error'=>1]));
}
$referer = $_SERVER['HTTP_REFERER'];
if ($referer && strpos($referer, $_SERVER['HTTP_HOST']) === false) {
    exit(json_encode(['error'=>1]));
}
if(empty($_POST['web3-wallet'])){
    exit(json_encode(['error'=>1]));
}

/**
 * TODO Perform additional server-side wallet signature verification
 * $recoveredAddress = web3.eth.personal.ecRecover($_POST['signMessage'], $_POST['signResult']);
 * if($recoveredAddress != $_POST['web3-wallet']) { exit(json_encode(['error'=>1])); }
 */

$_SESSION['web3-wallet'] = $_POST['web3-wallet'];
// TODO perform personal registration and user authorization, if necessary
exit(json_encode(['error'=>0]));