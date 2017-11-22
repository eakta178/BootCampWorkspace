

    var str = ['1', '2', '3'];
    //var revStr = [];
    var revStr = [];
    // console.log('first');

function revString(str) {
    var len= str.length-1;
    console.log(len);
    for (var i=len; i < 0; i--){
       console.log(str[i]); 
        for (var j = 0; j < str.length; j++) {
            var temp = str[i];
            revStr[j]=str[i];
            revStr[j] = temp;
            console.log('inside the func: '+ revstr)
            
        }

    }
    return revStr;
}
var reversestr=revString(str);
console.log('reverese of str is: ' + reversestr);
