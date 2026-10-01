# Panduan Hands-on Lab: Perbaiki Aplikasi "Daftar Tugas Mini"

**Waktu:** 20 menit | **Kerja:** mandiri atau berpasangan
**Tujuan:** menemukan dan memperbaiki 4 bug memakai Console dan Claude, lalu menambah satu fitur interaktif.

## Persiapan (2 menit)

1. Buka folder `latihan-bug/` di VS Code.
2. Klik kanan `index.html` > **Open with Live Server**.
3. Tekan **F12** > tab **Console**.
4. Buka claude.ai di tab lain.

## Cara Kerja Setiap Bug

Ulangi siklus ini untuk tiap bug:

1. **Amati** gejalanya (apa yang terjadi, apa yang seharusnya terjadi).
2. **Baca** pesan error di Console (jika ada).
3. **Tebak dulu** penyebabnya sendiri (30 detik).
4. **Tanya Claude** memakai template prompt di bawah.
5. **Pahami** jawabannya, lalu **perbaiki sendiri** di kode.
6. **Uji** ulang di browser.

## Template Prompt untuk Claude

Prompt yang baik berisi: konteks, gejala, error, kode, dan permintaan untuk **menjelaskan**.

```
Saya pemula JavaScript. Aplikasi daftar tugas saya bermasalah.

Yang seharusnya terjadi: [jelaskan]
Yang sebenarnya terjadi: [jelaskan]
Pesan error di Console: [salin persis]

Kode saya:
[tempel bagian kode yang relevan]

Tolong jelaskan penyebabnya dengan bahasa sederhana, tunjukkan baris yang salah,
lalu beri perbaikannya. Jangan tulis ulang seluruh kode.
```

Prompt yang **kurang baik**: "kode saya error, tolong perbaiki" (tanpa kode, tanpa error, tanpa konteks).

## Bug 1: Halaman Kosong

- **Gejala:** daftar tugas tidak muncul sama sekali.
- **Petunjuk:** lihat Console. Cari pesan merah. Nomor baris di ujung kanan menunjukkan lokasi.
- **Pertanyaan refleksi:** mengapa JavaScript menganggap elemen itu `null`?

## Bug 2: Halaman Reload Saat Tambah Tugas

- **Gejala:** ketik tugas, klik **Tambah**, halaman refresh dan tugas baru hilang.
- **Petunjuk:** perilaku bawaan form HTML saat submit. Lihat event `submit` di `script.js`.
- **Pertanyaan refleksi:** apa fungsi `e.preventDefault()`?

## Bug 3: Hitungan "Sisa Tugas" Terbalik

- **Gejala:** klik sebuah tugas sampai tercoret, angka sisa justru **bertambah**.
- **Petunjuk:** periksa function `hitungSisa`. Perhatikan kondisi di dalam `filter`.
- **Pertanyaan refleksi:** apa arti tanda `!` di depan `t.selesai`?

## Bug 4: Tombol Hapus Menghapus Tugas yang Salah

- **Gejala:** tambah beberapa tugas, hapus tugas tertentu, yang hilang tugas lain (atau tidak ada yang hilang).
- **Petunjuk:** periksa function `hapusTugas`. Bedakan **id** tugas dengan **indeks** di dalam array.
- **Pertanyaan refleksi:** mengapa `findIndex` lebih aman?

## Tantangan: Tombol Ganti Tema

Tambahkan perilaku interaktif: klik tombol **Ganti Tema** untuk beralih terang/gelap.

Sebagian sudah tersedia di `index.html` (tombol) dan `style.css` (kelas `.gelap`). Cek apakah tombol sudah berfungsi. Jika belum, tulis event listener di `script.js`:

1. Ambil tombol dengan `document.getElementById("tombol-tema")`.
2. Pasang `addEventListener("click", ...)`.
3. Di dalamnya, panggil `document.body.classList.toggle("gelap")`.

**Tantangan ekstra:** minta Claude menjelaskan `classList.toggle`, lalu buat tombol "Hapus semua yang selesai".

## Daftar Periksa Selesai

- [ ] Console bersih tanpa error merah
- [ ] Tambah tugas tanpa halaman reload
- [ ] Tugas kosong menampilkan pesan peringatan
- [ ] Angka "Sisa tugas" benar
- [ ] Hapus menghapus tugas yang tepat
- [ ] Tombol Ganti Tema berfungsi
- [ ] Saya bisa menjelaskan minimal satu bug dengan kata sendiri

## Refleksi (untuk dibahas di akhir)

1. Prompt mana yang paling membantu? Mengapa?
2. Apakah ada jawaban AI yang salah atau membingungkan? Bagaimana kamu mengetahuinya?
3. Apa yang kamu pelajari tentang membaca pesan error?
