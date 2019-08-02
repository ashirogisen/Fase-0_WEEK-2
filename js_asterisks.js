//1. Menyusun Barisan Bintang
for (var i = 0; i < 5; i++){
    console.log("*");
}
console.log();


//2. Menyusun Barisan Bintang Dengan Nested Looping
var x = "";
for (var i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        x = x +"*";
    }   
    console.log(x)
    x = "";
}
console.log();

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var x = "";
for (var i = 0; i < 5; i++){
    for (j = 0; j < 1; j++){
        x = x + "*";
    }
    console.log(x);
}