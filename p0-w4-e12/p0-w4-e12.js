function shoppingTime(memberId, money) {
  var moneyLeft = money;
  var listStuff = ["Sepatu Stacattu", "Baju Zoro", "Baju HN", "Sweater Uniklooh", "Casing Handphone"];
  var listPrice = [1500000, 500000, 250000, 175000, 50000];
  var alertMember = "Mohon maaf, toko X hanya berlaku untuk member saja";
  var alertMoney = "Mohon maaf, uang tidak cukup"

  var billCustomer = {
    memberId: memberId,
    money: money,
    listPurchased:[

    ],
    changeMoney: money
  };

  if (memberId === undefined || memberId === "") {
    return alertMember
  } else if (money < 50000) {
    return alertMoney
  } else {
      for (var i = 0; i <= listStuff.length -1; i++) {
        if (moneyLeft >= listPrice[i]) {
          billCustomer.listPurchased.push(listStuff[i])
          moneyLeft = moneyLeft - listPrice[i]
        }
      }
    billCustomer.changeMoney = moneyLeft
    return billCustomer;    
    }
}
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//   //{ memberId: '1820RzKrnWn08',
//   // money: 2475000,
//   // listPurchased:
//   //  [ 'Sepatu Stacattu',
//   //    'Baju Zoro',
//   //    'Baju H&N',
//   //    'Sweater Uniklooh',
//   //    'Casing Handphone' ],
//   // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
