/* Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa 
 * string. function tersebut mengembalikan nilai true jika di dalam string 
 * tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain 
 * minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan 
 * nilai false.
 */

function checkAB(num) {
    /* membuat variable penampung yg akan menampung kedua value index
     * untuk pencarian huruf "a" dan "b"
     */
    var storeA = [];
    var storeB = [];
    /* membuat loop yang berfungsi untuk mencari index posisi "a" dan "b"
     * di str input dengan perulangan sesuai dengan panjang str.length input
     * yang di kurang 1
     */
    for (var init = 0; init < num.length -1; init++) {
        /* -kondisi dimana proses pencarian str "a" pada str input, apabila
         *  posisi index ditemukan, maka int akan di masukan ke variable penampung
         */
        if (num.indexOf("a", init) !== storeA[storeA.length-1]) {
            storeA.push(num.indexOf("a", init))
            /* membuat kondisi apabila hasil pencarian index adalah -1
             * (yaitu output dimana tidak ditemukan str "a" di media str num)
             * apabila kondisi if tercapai, maka perintah selanjutnya adalah
             * menghilangkan array terakhir di variable pemapung
             */
            if (storeA[storeA.length -1] === -1) {
                storeA.pop();
            }
        }
        /* -kondisi dimana proses pencarian str "b" pada str input, apabila
         *  posisi index ditemukan, maka int akan di masukan ke variable penampung
         */
        if (num.indexOf("b", init) !== storeB[storeB.length-1]) {
            storeB.push(num.indexOf("b", init))
            /* membuat kondisi apabila hasil pencarian index adalah -1
             * (yaitu output dimana tidak ditemukan str "b" di media str num)
             * apabila kondisi if tercapai, maka perintah selanjutnya adalah
             * menghilangkan array terakhir di variable pemapung
             */            
            if (storeB[storeB.length -1] === -1) {
                storeB.pop();
          }
      }      
    }
    /* membuat loop untuk melakukan proses kondisi if apabila di input num
     * menampilkan huruf "b" dahulu sebelum "a", apabila kondisi tercapai
     * (munculnya "b" dahulu sebelum "a") maka loop akan ngulangi operasi loop
     * dan menambahkan increment pada limit
     */
    for (var init = 0; init <= storeB.length -1;init++) {
        /* kondisi if ini berguna untuk menyortir, apakah index "a" lebih kecil
         * dari pada index "b"
         */
        if (storeA[0] < storeB[init]) {
            /* apabila kondisi index "a" lebih kecil dri pada "b" maka proses berikutnya
             * adalah menyorti, apakah index "b" dikurang index "a" memiliki hasil
             * int yg lebih kecil dari 5, jika iya, maka return true
             * apabila hasil int lebih besar dari pada 5, return false karena
             * [1][2][3][4][5] ([2][3][4] adalah 3 huruf, aturan main soal)
             */  
            if (storeB[init] - storeA[0] <= 5) {
                return true
            } else {
                return false
            }
        } 
    }
    /* kondisi if dsni berguna untuk memfilter dimana huruf "b" muncul terlebih
     * dahulu dari pada "a", apabila kondisi terpenuhi, maka return false
     */
    if (storeB[storeB.length-1] < storeA[0]) {
        return false
    }
    /* mereturn false untuk segala hasil proses yg tidak sesuai
     * dengan aturan true
     */
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false