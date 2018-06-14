/* diakrenakan inputan tidak bisa dibuat counter limit 
 * maka langkah selanjutnya membuat limit pada function baru
 * dan mengubah inputan menjadi array agar dpt di tambahkan 1 per 1
 */

function totalDigitRekursif(angka) {
  // variable yg membuat inputan menjadi array String
  var angkaArr = String(angka).split("")

  /* function yang akan memproses inputan array dan menambahkan
   * counter limit untuk pengulangan rekursif
   */
  function sum(arrInput,i) {
    // kondisi dimana counter limit telah mencapai dari panjang array
    if (i === arrInput.length) {
      return 0
      /*  kondisi apabila counter limit blum mencapai panjang dri array
       *  dan memanggil function sndiri untuk mengulang pertambahan
       *  sampai counter limit mencukupi
       */ 
    } else {
      return parseInt(arrInput[i]) + sum(angkaArr, i + 1)
    }
  }
  // memanggil result function rekursif dengan menambahkan counter limit 0
  return sum(angkaArr,0)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
