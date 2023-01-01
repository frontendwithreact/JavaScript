
// ** Calculate the simple interest --------------------------------------------------

// function calculateInterest(amount, year) {
//     const interst = 10 / 100;
//     let totalInterest = year * amount * interst;
//     return totalInterest;
// }

// let showResult = calculateInterest(1000, 2);
// console.log(showResult);
//----------------------------------------------------------------------------------
// let borrowFromBank = 1000;
// let sellGrownChikensAfterOneYear = 1200;
// let payBackTheBankInterest = 10 / 100;

function profitAndLossCalculate(borrowFromBank, sellGrownChikens) {
    if (borrowFromBank < sellGrownChikens) {
        console.log("This is profitable project : ");
    }
    else if (borrowFromBank > sellGrownChikens) {
        console.log("This is loss project: ");
    }
    else if(borrowFromBank == sellGrownChikens){
        console.log("This is avarage project where is no profit and loss !");
    }
}

profitAndLossCalculate(1000, 2000);
profitAndLossCalculate(1000, 900);
profitAndLossCalculate(10, 10);