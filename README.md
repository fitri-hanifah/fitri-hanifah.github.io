# Fitri Hanifah — Portfolio

Website portfolio pribadi Fitri Hanifah, Supervisor Finance dengan 10+ tahun pengalaman di bidang keuangan, akuntansi, dan perpajakan.

Dibangun dengan HTML, CSS, dan JavaScript murni, tanpa framework dan tanpa proses build, jadi bisa langsung di-hosting di GitHub Pages.

## Fitur

- Dua bahasa: English (default) dan Bahasa Indonesia, lewat tombol EN / ID. Pilihan pengunjung diingat.
- Tema terang dan gelap, mengikuti pengaturan perangkat atau dipilih manual.
- Responsif dari layar HP 320px sampai desktop lebar.
- Form kontak yang mengirim email otomatis lewat [FormSubmit](https://formsubmit.co), dengan tembusan (cc), filter anti-spam, dan batas waktu 15 detik.
- Tombol WhatsApp dengan pesan pembuka yang ikut bahasa yang dipilih.
- Menu **Resume** yang membuka CV (PDF) di tab baru, plus tombol **Download CV (PDF)** di bagian Kontak.
- Menghormati pengaturan "reduce motion" di perangkat.

## Struktur folder

```
fitri-hanifah-portfolio/
├── index.html                  Struktur dan isi halaman (teks English)
├── assets/
│   ├── css/style.css           Semua tampilan, warna, dan tema
│   ├── js/main.js              Bahasa, tema, menu, form, animasi
│   ├── cv/CV_Fitri_Hanifah_Finance_Accounting_EN.pdf   File CV
│   └── img/
│       ├── fitri-hanifah.webp  Foto utama (ringan, 73 KB)
│       ├── fitri-hanifah.png   Cadangan untuk browser lama
│       └── favicon.svg         Ikon tab browser
└── README.md
```

## Menjalankan di komputer

Cukup buka `index.html` di browser. Atau jalankan server lokal dari folder ini:

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

## Deploy ke GitHub Pages

### Lewat website GitHub (tanpa terminal)

1. Buat repository baru di GitHub, misalnya `fitri-hanifah-portfolio`, dengan visibilitas **Public**.
2. Klik **Add file → Upload files**, lalu seret seluruh isi folder ini (`index.html`, folder `assets`, dan `README.md`). Pastikan struktur foldernya tetap sama.
3. Klik **Commit changes**.
4. Buka **Settings → Pages**. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
5. Tunggu 1–2 menit. Website akan tersedia di `https://<username>.github.io/fitri-hanifah-portfolio/`.

### Lewat terminal (git)

```bash
cd fitri-hanifah-portfolio
git init
git add .
git commit -m "Initial commit: portfolio Fitri Hanifah"
git branch -M main
git remote add origin https://github.com/<username>/fitri-hanifah-portfolio.git
git push -u origin main
```

Setelah itu aktifkan GitHub Pages seperti langkah 4 di atas.

## Mengaktifkan form kontak (wajib, sekali saja)

Form memakai FormSubmit, yang gratis dan tidak perlu pendaftaran. Namun alamat tujuannya harus dikonfirmasi satu kali.

1. Buka website yang sudah online, lalu kirim satu pesan percobaan lewat form.
2. FormSubmit mengirim email aktivasi ke **fitrihanifah79@yahoo.com**. Cek juga folder spam.
3. Klik **Activate Form** di email tersebut.
4. Kirim pesan sekali lagi. Mulai sekarang setiap pesan masuk ke fitrihanifah79@yahoo.com dengan tembusan ke zaskiaaretha258@gmail.com.

Catatan: form tidak bisa mengirim email jika halaman dibuka langsung sebagai file (`file://`) atau di dalam pratinjau yang memblokir koneksi keluar. Dalam kondisi itu, pengunjung akan melihat tombol WhatsApp sebagai alternatif.

## Mengubah konten

| Yang ingin diubah | Lokasi |
|---|---|
| Email tujuan form, email cc, nomor WhatsApp | `assets/js/main.js`, blok `CONFIG` di bagian paling atas |
| Teks bahasa Inggris | `index.html`, langsung pada elemen yang bersangkutan |
| Teks bahasa Indonesia | `assets/js/main.js`, objek `ID_DICT` (kuncinya sama dengan atribut `data-i18n` di HTML) |
| Pesan pembuka WhatsApp, subjek email | `assets/js/main.js`, objek `EXTRA` |
| Link LinkedIn, Gmail, Jobstreet | `index.html`, bagian `<div class="socials">` |
| Warna dan font | `assets/css/style.css`, blok `:root` di bagian atas |
| Foto | Ganti `assets/img/fitri-hanifah.webp` dan `.png` dengan nama file yang sama |
| File CV | Ganti `assets/cv/CV_Fitri_Hanifah_Finance_Accounting_EN.pdf` dengan nama file yang sama |

### Memperbarui CV

Menu **Resume** dan tombol **Download CV (PDF)** sama-sama mengarah ke `assets/cv/CV_Fitri_Hanifah_Finance_Accounting_EN.pdf`.
Untuk memperbarui CV, upload file baru dengan **nama yang persis sama** ke folder `assets/cv/`. Tidak ada kode yang perlu diubah.

Kalau nama file-nya berbeda, ganti juga link-nya di `index.html` (cari `assets/cv/`, ada di dua tempat).

### Menambah teks yang bisa diterjemahkan

1. Tulis teks bahasa Inggris di `index.html` dan beri atribut `data-i18n="kunci.unik"`.
2. Tambahkan `"kunci.unik": "teks bahasa Indonesia"` ke `ID_DICT` di `main.js`.

Untuk placeholder input gunakan `data-i18n-ph`, dan untuk teks alternatif gambar gunakan `data-i18n-alt`.

## Teknologi

- HTML5, CSS3 (custom properties, grid, flexbox), JavaScript ES5 tanpa library.
- Font: Fraunces, Hanken Grotesk, dan JetBrains Mono dari Google Fonts.
- Form: FormSubmit (AJAX).
