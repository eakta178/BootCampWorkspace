

    var str = 'Eakta';
    var revStr = [];
  
function revString(str) {
    var len= str.length-1;
   
    for (var i=len; i >= 0; i--){ 

            revStr.push(str[i]);
            
    }
    return revStr;
}
var reversestr=revString(str);
console.log('reverese of str is: ' + reversestr);
