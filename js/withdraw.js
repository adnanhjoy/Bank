document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdraw = parseFloat(withdrawAmount.value);
    const addWithdraw = document.getElementById('withdraw-amount');
    const previousWithdraw = parseFloat(addWithdraw.innerText);

    withdrawAmount.value = '';


    //Balance Withdraw
    const mainBalance = document.getElementById('main-balance');
    const previousMainBalance = parseFloat(mainBalance.innerText);
    if (withdraw > previousMainBalance) {
        alert('Not enough balance');
        return;
    }
    const totalWithdraw = withdraw + previousWithdraw;
    addWithdraw.innerText = totalWithdraw;
    const totalMainBalance = previousMainBalance - withdraw;
    mainBalance.innerText = totalMainBalance;
})