function angkaPrima(angka) {
  /* -membuat kondisi if apabila inputan termasuk angka
   *  bilangan prima 1 digit
   */
  if (angka < 10) {
    if (
      angka === 2 ||
      angka === 3 ||
      angka === 5 ||
      angka === 7 
    ) { 
      return true;
    } else {
      // selain dari angka prima 1 digit, maka return false
      return false;
    }
    /* -membuat kondisi untuk inputan di atas 1 digit
     * -inputan akan di filter dengan perhitungan modulus angka
     *  prima 1 digit
     * -apabila input menghasilkan nilai 0 ketika di modulus
     *  dgn angka prima 1 digit, maka return akan menjadi false
     * -apabila input menghasilkan nilai 1 ketika di modulus
     *  dgn angka prima 1 digit, maka return akan menjadi true
     */
  } else if (
      angka % 2 === 0 ||
      angka % 3 === 0 ||
      angka % 5 === 0 ||
      angka % 7 === 0 
      ) {
        return false
  } 
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
