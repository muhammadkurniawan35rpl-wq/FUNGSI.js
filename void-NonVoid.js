function kartuNama(nama, kelas, hobi){
     console.log('==================');
     console.log('Nama : ' + nama );
     console.log('Kelas : ' + kelas);
     console.log('Hobi : ' + hobi)
     console.log('==================')
 }

 kartuNama('Budi speed limit', 'X RPL 2', 'NGEDRAG');
 kartuNama('endro karbu banjir', 'X RPL 2', 'BLEYERAN');
 kartuNama('Yono tambal ban', 'X RPL 2', 'Pengakal')

  //Soal ke2//

 function luasPersegiPanjang(panjang, lebar){
     return panjang * lebar;
 } 
 function kelilingPersegiPanjang(panjang, lebar){
     return panjang + lebar;
 }


 let hasilLuas = luasPersegiPanjang(10, 4);
 let hasilKeliling = kelilingPersegiPanjang(10, 4);

 console.log('Luas Persegi Panjang Adalah: ' + hasilLuas);
 console.log('Keliling Persegi Panjang Adalah: ' + hasilKeliling);

                                    // Soal ke3//

function hitungRataRata(n1, n2, n3){
    return (n1 + n2 + n3) /3
}

function tentukanPredikat(rata){
    if (rata >= 85){
        return 'A';
    } else if (rata >= 75){
        return 'B';
    } else if (rata >= 60){
        return 'C';
    } else {
        return 'D'
    }
}

function cetakRapor(nama, n1, n2, n3){
    let rata = hitungRataRata(n1,n2,n3);
    let predikat = tentukanPredikat(rata);

    console.log('Nama: ' +nama);
    console.log('Rata-rata: '+rata.toFixed(2));
    console.log('Predikat: '+predikat);
    console.log('============================')
}

cetakRapor('Budi speed', 80, 82, 85);
cetakRapor('Jendral wito', 90, 88, 92);
cetakRapor('Yono dobleh', 65, 70, 68);