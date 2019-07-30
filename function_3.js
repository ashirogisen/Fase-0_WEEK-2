function processSentence(a1, a2, a3, a4) {
    return 'Nama saya ' + a1 + ' ,umur saya ' + a2 + ' tahun, alamat saya di ' + a3 + ', dan saya punya hobby yaitu ' + a4;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
