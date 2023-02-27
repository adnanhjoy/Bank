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