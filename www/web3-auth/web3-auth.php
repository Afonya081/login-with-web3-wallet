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
if(!empty($_POST['web3-wallet'])){
    $_SESSION['web3-wallet'] = $_POST['web3-wallet'];
    // TODO выполните личную регистрацию и автотризацию пользователя, если требуется
    exit(json_encode(['error'=>0]));
} else {
    exit(json_encode(['error'=>1]));
}