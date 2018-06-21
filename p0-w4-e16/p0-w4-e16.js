function makanTerusRekursif(waktu) {
  function times(waktu,counter) {
    if(waktu < 1) {
      return 0
    } else {
      return counter + times(waktu - 15,counter)
    }
  }
  return times(waktu,1)
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
