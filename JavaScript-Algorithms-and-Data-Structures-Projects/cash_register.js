/* Design a cash register drawer function checkCashRegister() that accepts purchase price 
as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it 
is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key. */

/* Currency Unit Amount
Penny $0.01 (PENNY)
Nickel  $0.05 (NICKEL)
Dime  $0.1 (DIME)
Quarter $0.25 (QUARTER)
Dollar  $1 (DOLLAR)
Five Dollars  $5 (FIVE)
Ten Dollars $10 (TEN)
Twenty Dollars  $20 (TWENTY)
One-hundred Dollars $100 (ONE HUNDRED) */

// My solution:

function checkCashRegister(price, cash, cid) {
  let arr = [1,5,10,25,100,500,1000,2000,10000];
  let a = (cash-price)*100, arrReal =[], RealSum = 0, arr2=[];
  let arr3 = ["ONE HUNDRED","TWENTY","TEN","FIVE","ONE","QUARTER","DIME","NICKEL","PENNY"]
  //finding number of particular coins and total sum in cid
  for (let i=cid.length-1;i>=0;i--){
    let sum = Math.round(cid[i][1]*100/arr[i]);
    arrReal.push(sum);
    RealSum +=sum*arr[i]/100;
  }

  let obj = new Object();
  obj.change = [];
  arr.reverse();
  let cidSum = 0;
  for (let j=0;j<9;j++){
    let sum = 0;
    while (arrReal[j]>0 && a>=arr[j]){
      sum++;
      a-=arr[j];
      arrReal[j]--;
    }
    arr2.push(arr[j]*sum/100);
      if (arr2[j]>0){
        obj.change.push([arr3[j],arr2[j]]);
        cidSum=(cidSum*100+arr2[j]*100)/100;
      }
  }
  arr2.reverse();
  arr3.reverse();
// console.log(arr2)
// console.log(cidSum)
  a = cash-price;
// console.log(a)
  if (a === RealSum){
    obj.change = [];
    for (let j=0;j<9;j++){
      obj.change.push([arr3[j],arr2[j]])
    }
    obj.status = "CLOSED"
    return obj;
  } else if (a > RealSum || a !== cidSum){         
    obj.status = "INSUFFICIENT_FUNDS";      
    obj.change = [];   
    return obj;         
  } else {
    obj.status = "OPEN"
    return obj;
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
