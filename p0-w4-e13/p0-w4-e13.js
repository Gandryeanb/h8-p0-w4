function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  let buyer = [[],[],[]]
  let profit = [0,0,0]
  //Phase filter buyer
  for (var i = 0; i < shoppers.length; i++) {
    //mengecek list barang pembelian
    if (shoppers[i].product === 'Sepatu Stacattu') {
      //filter ketersediaan stock
      if (shoppers[i].amount <= listBarang[0][2]) {
        // mengurangi stock barang
        listBarang[0][2] = listBarang[0][2] - shoppers[i].amount
        //menghitung dan memasukan profit
        profit[0] = profit[0] + (shoppers[i].amount * listBarang[0][1])
        // memasukan nama buyer
        buyer[0].push(shoppers[i].name)
      }
    }
    else if (shoppers[i].product === 'Baju Zoro') {
      //filter ketersediaan stock
      if (shoppers[i].amount <= listBarang[1][2]) {
        // mengurangi stock barang
        listBarang[1][2] = listBarang[1][2] - shoppers[i].amount
        //menghitung dan memasukan profit
        profit[1] = profit[1] + (shoppers[i].amount * listBarang[1][1])
        // memasukan nama buyer
        buyer[1].push(shoppers[i].name)
      }
    }
    else if (shoppers[i].product === 'Sweater Uniklooh') {
      //filter ketersediaan stock
      if (shoppers[i].amount <= listBarang[2][2]) {
        // mengurangi stock barang
        listBarang[2][2] = listBarang[2][2] - shoppers[i].amount
        //menghitung dan memasukan profit
        profit[2] = profit[2] + (shoppers[i].amount * listBarang[2][1])
        // memasukan nama buyer
        buyer[2].push(shoppers[i].name)
      }
    } else {

    }  
  }
  //Phase returning output
    var result = [ ]
    //making output per product
    for (var j = 0; j < listBarang.length; j++) {
      var subResult = {
        product: listBarang[j][0],
        shoppers: buyer[j],
        leftOver: listBarang[j][2],
        totalProfit: profit[j]
      };
      result.push(subResult)
      var subResult = { }
    }
  return result
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]
