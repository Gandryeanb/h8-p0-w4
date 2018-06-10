function changeVocals (str) {
  var result = ""
  var alpha = "abcdefghijklmnopqrstuvwxyz  "
  var ALPHA = alpha.toUpperCase()

  for (var i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "i" || str[i] == "u" || str[i] == "e" || str[i] == "o" || str[i] == "A" || str[i] == "I" || str[i] == "U" || str[i] == "E" || str[i] == "O") {
      if (str[i] === str[i].toUpperCase()) {
        result = result + ALPHA[ALPHA.indexOf(str[i]) + 1]
      } else {
        result = result + alpha[alpha.indexOf(str[i]) + 1]
      }
    } else {
      result = result + str[i]
    }
  }
  return result
}

function reverseWord (str) {
  var result = ""

  for (var i = str.length - 1; i >= 0; i--) {
    result = result + str[i]
  }
  return result
}

function setLowerUpperCase (str) {
  var result = ""
 
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result = result + str[i].toLowerCase()
    } else if (str[i] === str[i].toLowerCase()) {
      result = result + str[i].toUpperCase()
    } else {
      result = result + str[i]
    }
  }
  return result
}

function removeSpaces (str) {
  var result = ""

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result = result + str[i]
    } else {
    }
  }
  return result
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  } else {
      return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))  
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
