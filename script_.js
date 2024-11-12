// Data dummy untuk berita dan artikel
const beritaData = [
    {
        title: "Berita 1: Pembangunan Jalan Baru",
        image: "images/berita1.jpg",
        content: "Pemerintah daerah sedang melakukan pembangunan jalan baru untuk meningkatkan aksesibilitas."
    },
    {
        title: "Berita 2: Program Vaksinasi Massal",
        image: "images/berita2.jpg",
        content: "Program vaksinasi massal akan dilaksanakan mulai minggu depan di seluruh wilayah."
    },
    {
        title: "Berita 3: Festival Budaya Lokal",
        image: "images/berita3.jpg",
        content: "Festival budaya lokal akan diadakan pada akhir bulan ini dengan berbagai acara menarik."
    }
];

const artikelData = [
    {
        title: "Artikel 1: Pentingnya Kesadaran Lingkungan",
        image: "images/artikel1.jpg",
        content: "Kesadaran lingkungan sangat penting untuk menjaga kelestarian alam dan kehidupan kita."
    },
    {
        title: "Artikel 2: Tips Kesehatan di Musim Pandemi",
        image: "images/artikel2.jpg",
        content: "Berikut adalah beberapa tips kesehatan yang perlu diperhatikan selama pandemi."
    },
    {
        title: "Artikel 3: Membangun Komunitas yang Kuat",
        image: "images/artikel3.jpg",
        content: "Membangun komunitas yang kuat dapat meningkatkan kualitas hidup masyarakat."
    }
];

// Fungsi untuk menampilkan berita
function displayBerita() {
    const beritaContainer = document.getElementById('beritaContainer');
    beritaData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card animate">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.content}</p>
                </div>
            </div>
        `;
        beritaContainer.appendChild(card);
    });
}

// Fungsi untuk menampilkan artikel
function displayArtikel() {
    const artikelContainer = document.getElementById('artikelContainer');
    artikelData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card animate">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.content}</p>
                </div>
            </div>
        `;
        artikelContainer.appendChild(card);
    });
}

// Event listener untuk formulir kontak
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulasi pengiriman pesan
    document.getElementById('formResponse').innerText = `Terima kasih, ${name}! Pesan Anda telah dikirim.`;
    this.reset(); // Reset form setelah pengiriman
});

// Fungsi untuk menambahkan animasi saat memuat halaman
function animateCards() {
    const cards = document.querySelectorAll('.animate');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-in');
        }, index * 200); // Delay untuk setiap kartu
    });
}

// Memanggil fungsi untuk menampilkan data saat halaman dimuat
window.onload = function() {
    displayBerita();
    displayArtikel();
    animateCards();
};