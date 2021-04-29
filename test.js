const { concat } = require("rxjs");

var len = 8;
var height = 5;

for(let i= 0;i<= height; i++){
  var val = '';
    for(let j= 0;j<= len ;j++){
      // val = (i === 0 || i == len) ? val.concat('*') : j == 0 || j == height ? val.concat('*') : val.concat(' ') ;  // rectangle
      // val =   i === j ?  val.concat('*') : j === len - i ? val.concat('*') : val.concat(' '); // X
      // val  = len / 2 == i ? val.concat('*'): height / 2 == j ?val.concat('*'): val.concat('-'); //+
      // val  =  i == j || j == 0 || i == height? val.concat('*'): val.concat('-');
      val  =  (len / 2 == j && i== 0) || ( len / 2 == j - i  ) || ( len / 2 == j + i  )|| i == height? val.concat('*'): val.concat(' ');
    }
    console.log(val);
    console.log('\n')
    
  }
