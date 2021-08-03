function bringSingara(taka) {
    console.log('singarar jonno dise ', taka);
    console.log('mama singara den');
    // console.log('ei nen singara');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

// bringSingara(350); 

var money = 300;
var singara = bringSingara(money); //if return something then applicable
console.log('ei nen singara', singara);