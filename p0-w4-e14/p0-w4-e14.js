function sorting(arrNumber) {
  var numberPicked = []
  var qNumber = 0

  if (arrNumber == "") {
    return ""
  } else {
    for (var i = 0; i < arrNumber.length; i++) {
      if (numberPicked.indexOf(arrNumber[i]) === -1) {
        numberPicked.push(arrNumber[i])
      }
    }
	  numberPicked.sort()
    numberPicked = numberPicked[numberPicked.length -1]
    for (var j = 0; j < arrNumber.length; j++) {
      if (numberPicked === arrNumber[j]) {
			  qNumber++
		  }
    }
	  var result = [numberPicked,qNumber]
    return result
  }
}

function getTotal(arrNumber) {
  if (arrNumber == "") {
    return ""
  } else {
	  return "angka paling besar adalah "+ arrNumber[0] +" dan jumlah kemunculan sebanyak "+ arrNumber[1] +" kali"
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
