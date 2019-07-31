//1. Melakukan Looping Menggunakan While
var deret = 0;
var deret2 = 22;
console.log("LOOPING PERTAMA");
while(deret < 20) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  deret=deret + 2;
  console.log(deret + " - I love Coding");
}
console.log("LOOPING KEDUA");
while(deret2 > 2) { // Loop akan terus berjalan selama nilai deret masih di atas 0
    deret2=deret2 - 2;
    console.log(deret2 + " - I will become fullstack developer");
  }
console.log();


//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(var angka = 1; angka <= 20; angka++) {
    console.log(angka + " - I love coding");
  }
console.log("LOOPING KEDUA");
for(var angka2 = 20; angka2 > 0; angka2--){
    console.log(angka2 + " - I will become fullstack developer");
}
console.log();


//3. Angka Ganjil dan Genap
for(i = 1; i <= 100; i++){
  if(i % 2 === 0){
      console.log(i + " = GENAP");
  }
  else{
      console.log(i + " = GANJIL");
  }

}
console.log();

//3B

for (i = 1; i <= 100; i++){
  if(i % 2 === 0){
      console.log(i + " KELIPATAN 2");
  }
}

for (i2 = 1; i2 <= 100; i2++){
  if(i2 % 5 === 0){
      console.log(i2 + " KELIPATAN 5");
  }
}

for (i3 = 1; i3 <= 100; i3++){
  if(i3 % 9 === 0){
      console.log(i3 + " KELIPATAN 9");
  }
}

