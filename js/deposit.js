document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-field')
    const amount = parseFloat(depositAmount.value);
    const addAmount = document.getElementById('deposit-amount');
    const previousAmount = parseFloat(addAmount.innerText);
    const totalAmount = amount + previousAmount;
    addAmount.innerText = totalAmount;
    depositAmount.value = '';

    //Balance Amount Add
    const mainBalance = document.getElementById('main-balance');
    const previousMainBalance = parseFloat(mainBalance.innerText);
    const totalMainBalance = previousMainBalance + amount;
    mainBalance.innerText = totalMainBalance;


})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdraw = parseFloat(withdrawAmount.value);
    const addWithdraw = document.getElementById('withdraw-amount');
    const previousWithdraw = parseFloat(addWithdraw.innerText);
    const totalWithdraw = withdraw + previousWithdraw;
    addWithdraw.innerText = totalWithdraw;
    withdrawAmount.value = '';


    //Balance Withdraw
    const mainBalance = document.getElementById('main-balance');
    const previousMainBalance = parseFloat(mainBalance.innerText);
    const totalMainBalance = previousMainBalance - withdraw;
    mainBalance.innerText = totalMainBalance;
})