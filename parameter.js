function bringSingara(taka) {
    console.log('singarar jonno dise ', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

// bringSingara(350); 

var money = 300;
var singara = bringSingara(money);
console.log('ei nen singara', singara);