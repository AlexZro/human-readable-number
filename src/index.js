module.exports = function toReadable (number) {
 
  const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }

  const tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  }
  
  let arrTens = number.toString().split('');
    
  if(number == 0 || number < 20) {
    return ones[number];
  } else if(number >= 20 && number <= 99 ) {
    return number % 10 ==0 ? tens[number] :  tens[arrTens[0]+ 0] + " " +  ones[arrTens[1]];
  } else if(number % 100 == 0 ) {
    return ones[arrTens[0]]+ ' '+ 'hundred';
  } else if (number >=100 && number % 100  >= 1 && number % 100  >= 1 && number % 100  <= 9) {
    return ones[arrTens[0]]+ ' ' + 'hundred' + ' ' + ones[arrTens[2]];
  }else if (number >=100 && number % 100  >= 1 && number % 100  <= 19) {
    return ones[arrTens[0]]+ ' ' + 'hundred' + ' ' + ones[arrTens.slice(1,3).join('')];
  } else if (number >=100 && number % 100  >= 20 && number % 10  !== 0) {
    return ones[arrTens[0]]+ ' ' + 'hundred'+ ' ' + tens[arrTens[1]+ 0] + " " +  ones[arrTens[2]];
  } else if(number >=100 && number % 100  >= 20 && number % 10  == 0) {
    return ones[arrTens[0]]+ ' ' + 'hundred'+ ' ' + tens[arrTens[1]+ 0];
  }
}
