var phones = ["samsung", "apple", "xiaomi", "realme"];


// check an element exist in array
// if exist the index number will be 0 or 0+
// if not the index number will be -1


if (phones.indexOf("oppo" == -1)) {
    console.log("hey oppo missing");
}
if (phones.indexOf("realme" != -1)) {
    console.log("dont't worry boss! i'm here");
}




function numbers(n1, n2, n3) {
    var sum = n1 + n2 + n3;
    return sum ;
}

var total = numbers(1, 2, 3);
console.log(total);