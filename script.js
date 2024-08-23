document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const khodamList = [
        " Macan Putih",
        "Harimau Jawa",
        "Garuda Sakti",
        "Naga Hitam",
        " Serigala Biru",
        " Elang Perkasa",
        "Cewe Cantik",
        " Putri Keraton",
        " Ratu Kidul",
        "Nyi Ronggeng",
        "Budi Martabak",
        " Laba - Laba Sunda",
        " Nyi Blorong",
        "Prabu Siliwangi",
        "Dewi Sri",
        " Bebek Joget",
        " Si Kuda Goyang",
        " Macan Ompong",
        " Jokowi",
        " Gibran"
    ];
    
    
    const nama = document.getElementById('nama').value.trim();
    
    
    if (nama !== "") {
        
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const selectedKhodam = khodamList[randomIndex];
        
    
        document.getElementById('result').textContent = `${nama}, Khodam Anda adalah: ${selectedKhodam}`;
    } else {
        document.getElementById('result').textContent = "Silakan masukkan Nama Anda!";
    }
});