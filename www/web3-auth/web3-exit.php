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

// remove authorization
if(!empty($_SESSION['web3-wallet'])){
    unset($_SESSION['web3-wallet']);
}

header("Location: /web3-auth");

