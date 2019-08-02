//1. Melakukan Looping Menggunakan While
var deret = 1;

console.log("LOOPING PERTAMA");
while(deret <= 20) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  if (deret % 2 === 0) {
		console.log(deret + ' - I love coding');
  }
  deret++;
}
console.log('');

console.log('LOOPING KEDUA');
while (deret >= 2) {
	if (deret % 2 === 0) {
		console.log(deret + ' - I will become fullstack developer');
	}
	deret--;
}
console.log('');


//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(var angka = 1; angka <= 20; angka++) {
  console.log(angka + " - I love coding");
}

console.log('');
console.log("LOOPING KEDUA");
for(var angka2 = 20; angka2 > 0; angka2--) {
  console.log(angka2 + " - I will become fullstack developer");
}
console.log();


//3. Angka Ganjil dan Genap
for(i = 1; i <= 100; i++) {
  console.log('counter sekarang = ' + i);
  if(i % 2 === 0) {
    console.log("GENAP");
  }
  else {
    console.log("GANJIL");
  }

}
console.log();

//3B

for (var i = 1; i <= 100; i+=2) {
	console.log('counter sekarang = ' + i);
    if (i % 3 === 0) {
      console.log(i + ' KELIPATAN 3');
    }
}
console.log('');

for (var i = 1; i <= 100; i+=5) {
	console.log('counter sekarang = ' + i);
    if (i % 6 === 0) {
      console.log(i + ' KELIPATAN 6');
    }
}	
console.log('');

for (var i = 1; i <= 100; i+=9) {
	console.log('counter sekarang = ' + i);
    if (i % 10 === 0) {
      console.log(i + ' KELIPATAN 10');
    }
}


