function kartuNama(nama, kelas){
    console.log('==================');
    console.log('Nama : ' + nama );
    console.log('Kelas : ' + kelas);
    console.log('==================')
}
kartuNama('yono', 'X RPL');
kartuNama('endro', 'X RPL');

function luasPersegi(sisi){
    return sisi * sisi;
}

let luas1 = luasPersegi(5);
let luas2 = luasPersegi(8);

console.log('Luas persegi pertama: ' + luas1);
console.log('Luas persegi kedua: ' + luas2);
console.log('Jumlah kedua luas: ' + (luas1 + luas2));

function kelilingPersegi (sisi){
    return 4 * sisi;
}

function cetakKeliling(sisi){
    let hasil = kelilingPersegi(sisi);
    console.log('Persegi dengan sisi' + sisi + ' memiliki keliling '+ hasil);    
}

cetakKeliling(6);
cetakKeliling(10);