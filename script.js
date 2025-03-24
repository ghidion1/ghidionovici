function addPhotos() {
    // Obținem fișierele selectate de utilizator
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    // Verificăm dacă sunt fișiere încărcate
    if (files.length === 0) {
        alert('Te rog să selectezi cel puțin o fotografie!');
        return;
    }

    // Obținem containerul pentru poze
    const photoContainer = document.getElementById('photoContainer');

    // Parcurgem fișierele și le adăugăm la album
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Verificăm dacă fișierul este o imagine
        if (!file.type.startsWith('image/')) {
            alert('Te rog să încarci doar fișiere de tip imagine!');
            continue;
        }

        // Creăm un element de imagine
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);  // Creați un URL temporar pentru fișierul încărcat
        img.alt = `Fotografie ${i + 1}`;

        // Adăugăm imaginea la container
        photoContainer.appendChild(img);
    }

    // Resetăm input-ul pentru a putea încărca din nou aceleași fișiere
    fileInput.value = '';
}
