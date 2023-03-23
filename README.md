# Вход и авторизация на сайте с помощью Web3 Кошелька: MetaMask, Trust Wallet, Coinbase Wallet ...

## Копирование
1. Загружаем содержимое папки [www](www) в корень сайта.

## Пример входа
1. Запустите в браузере http://You.Domain/web3-auth/

## Файлы
1. [www/web3-auth/index.php](www/web3-auth/index.php) - Пример входа
2. [www/web3-auth/user-content.php](www/web3-auth/user-content.php) - Контент к которому пользователь получает доступ
3. [www/web3-auth/web3-auth.php](www/web3-auth/web3-auth.php) - В этот файл JS делает запрос и сохраняет авторизацию в $_SESSION['web3-wallet']
4. [www/web3-auth/web3-exit.php](www/web3-auth/web3-exit.php) - Пример выхода

## Installation

You can install the package via composer: 

```bash
composer require vladimirgav/login-with-web3-wallet
```