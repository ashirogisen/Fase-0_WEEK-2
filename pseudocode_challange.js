/*1. Newton Second Law

STORE "massa benda (kg)" with 600kg
STORE "percepatan benda (m/s2)" with 2m/s2

CALCULATE "massa benda(kg)" times "percepatan benda(m/s2)"
SET "resultan gaya (newton)" value with calculation result
DISPLAY "resultan gaya (newton)"

2. Tahun Kabisat

STORE "tahun" to any number

IF "tahun" mod 4 = 0 AND “tahun” mod 100 ≠ 0 OR “tahun” mod 4 = 0 AND “tahun” mod 100 = 0 AND “tahun” mod 400 = 0
  DISPLAY "Tahun yang anda input termasuk Tahun Kabisat"
ELSE
  DISPLAY "Tahun yang anda input tidak termasuk Tahun Kabisat."

3.  Laundry Day

STORE "baju yang akan dicuci" with 1

WHILE "isi mesin cuci" < 20
  ADD "baju yang akan dicuci" by 1

DISPLAY "Mesin cuci akan menyala"

4.  Periksa Kuku
    
STORE “jumlah siswa/siswi periksa kuku” to any number (jumlah siswa/siswi yang  
belum diperiksa)

WHILE “jumlah siswa/siswi periksa kuku” < 40
  ADD "jumlah siswa/siswi periksa kuku" by 1
      DO “pemeriksaan kuku”
        IF “kuku yang diperiksa = panjang”
          DO “guru memberi hukuman kepada siswa/siswi”
        ELSE
          DO “guru akan memberi pujian kepada siswa/siswi”
*/
        