/*
1.add event handler with withdraw button

2.get the withdraw button
3.clear the withdrae field
4.get the previous withdraw total
5.calculate withdraw total
6.get previous balance
7.calculate new balance set to the total balance element

*/
// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step-3
    withdrawField.value = '';
    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrwaTotalString = withdrawTotalElement.innerText;
    const previousWihdrawTotal = parseFloat(previousWithdrwaTotalString);
    // step-5
    const newWithdrawTotal =previousWihdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=newWithdrawTotal;
    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-7
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceElement.innerText= newBalanceTotal;


})