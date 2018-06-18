function kaliTerusRekursif(angka) {
  var angkaArr = [angka]
  for (var i = 0; i < 1;) {
    if (String(angkaArr[angkaArr.length -1]).length === 1) {
      i++
    } else {
      function times(input,index) {
        var inputArr = String(input).split("")
        if (inputArr.length === index) {
          return 1
        } else {
          return parseInt(inputArr[index]) * times(input,index + 1)
        }
      }
      angkaArr.push(times(angkaArr[angkaArr.length - 1],0))
    }
  }
  return angkaArr[angkaArr.length - 1]
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
