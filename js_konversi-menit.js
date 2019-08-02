function konversiMenit(menit) {
    while(menit > 59) {
        var jam = menit / 60;
        var n = Math.floor(jam);
        menit = menit - (n*60);

        if (menit < 10) {
            return n + ':0' + menit; 
        }

        return n + ':' + menit;
    }
    if (menit < 60) {
        return '0:' + menit;
    }
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(1120)); // 2:00