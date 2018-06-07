function digitPerkalianMinimum(angka) {
  /* membuat variable penampung dan variable
   * untuk menampilkan result
   */
  var result = []
  var store = []  
  /* membuat for untuk menghitung angka faktor terkecil
   * dari 1 ~ 9
   */
  for (var i = 1; i < 10; i++) {
    /* membuat kondisi if untuk menghindari mendapatkan value yg
     * desimal, dan dan apabila cari length dari value tsb, menjadi
     * infinity
     */
    if (angka % i === 0 ) {
      // dikarenakan permaslahan mencari digit, maka value harus str
      store.push(String(i)) // [1]
      store.push(String(angka/i)) //[1,24]
      result.push(store[0].length + store[1].length) //[1,2]
      store = [] // []
    }
  }
  /* mensorting value terkecil dari array result
   */
  result.sort();
  return result[0];
}

