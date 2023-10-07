// if..else Statement
// Input usia pengguna
var usia = 17;
// Batasan usia legal untuk membeli rokok
var batasanUsia = 17;
// Memeriksa apakah pengguna boleh membeli rokok
if (usia >= batasanUsia) {
    console.log("Anda boleh membeli rokok.");
  } else {
    console.log("Maaf, Anda belum mencapai usia legal untuk membeli rokok.");
  }

// Nested if 
// Input nilai ujian Ipa dan Ips
var nilaiIpa = 85;
var nilaiIps = 90;

// Batas nilai kelulusan
var batasNilai = 70;

// Mengevaluasi apakah siswa lulus Ipa dan Ips
if (nilaiIpa >= batasNilai) {
  if (nilaiIps >= batasNilai) {
    console.log("Siswa lulus ipa dan ips.");
  } else {
    console.log("Siswa lulus ipa, tetapi tidak lulus ips.");
  }
} else {
  if (nilaips >= batasNilai) {
    console.log("Siswa lulus ips, tetapi tidak lulus ipa.");
  } else {
    console.log("Siswa tidak lulus ipa dan ips.");
  }
}

// switch case
let angkaHari = 4 
switch (angkaHari) {
    case 1:
        console.log("Hari ini adalah Senin")
        break;
    case 2:
        console.log("Hari ini adalah Selasa")
        break;
    case 3:
        console.log("Hari ini adalah Rabu")
        break;
    case 4:
        console.log("Hari ini adalah Kamis")
        break;
    case 5:
        console.log("Hari ini adalah Jumat")
        break;
        default:
            console.log("Hari ini adalah Sabtu")
}

// For statement
// Menggunakan pernyataan for untuk mencetak angka dari 1 hingga 10
for (var i = 1; i < 7; i++) {
  console.log(i);
}

// While 
const buah = ["nanas", "pisang", "anggur", "jeruk", "apel"];
let indeks = 0;

while (indeks < buah.length) {
  console.log(buah[indeks]);
  indeks++;
}

// Do While 
let angka = 1;

do {
  console.log(angka);
  angka++;
} while (angka < 4);

// Function 
// Function untuk menggabungkan dua kata
function gabungKata(kata1, kata2) {
    return kata1 + " " + kata2;
  }
  
  // Menggunakan function untuk menggabungkan kata "Halo" dan "Dunia"
  var kataPertama = "Haii";
  var kataKedua = "Apa Kabar";
  var hasilGabungan = gabungKata(kataPertama, kataKedua);
  
  // Menampilkan hasil penggabungan
  console.log("Hasil penggabungan kata: " + hasilGabungan);