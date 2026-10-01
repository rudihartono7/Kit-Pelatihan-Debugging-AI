# Kit Pelatihan: Debugging & Scripting dengan AI (JavaScript Pemula)

Durasi: 60 menit | Bahasa: Indonesia | Alat: VS Code + Live Server, Claude (claude.ai)

## Isi folder

| Berkas | Fungsi |
|---|---|
| `01-Silabus.md` | Silabus & rundown 60 menit, catatan fasilitator |
| `02-Panduan-Lab.md` | Lembar kerja peserta (langkah demi langkah + template prompt AI) |
| `solusi/` | Aplikasi "Daftar Tugas Mini" yang sudah benar (untuk demo instruktur) |
| `latihan-bug/` | Versi yang sengaja berisi 4 bug (dibagikan ke peserta) |
| `Training-Debugging-AI.pptx` | Slide presentasi |

## Cara menjalankan

1. Buka folder `latihan-bug/` di VS Code.
2. Klik kanan `index.html` > **Open with Live Server**.
3. Buka DevTools browser (F12) > tab **Console**.

## Daftar bug di `latihan-bug/script.js` (kunci jawaban instruktur)

| # | Gejala | Penyebab | Perbaikan |
|---|---|---|---|
| 1 | Halaman kosong, Console: `Cannot set properties of null (setting 'innerHTML')` | Typo id: `"daftr"` | Ganti ke `"daftar"` |
| 2 | Klik **Tambah**, halaman reload dan tugas hilang | `e.preventDefault()` hilang di event submit | Tambahkan `e.preventDefault()` |
| 3 | "Sisa tugas" menunjukkan jumlah yang selesai, bukan yang belum | Kondisi filter terbalik | `!t.selesai` |
| 4 | Tombol Hapus menghapus tugas yang salah | `splice(id, 1)` memakai id sebagai indeks | Pakai `findIndex` untuk mencari indeks |

Urutan bug sengaja bertahap: bug 1 harus diperbaiki dulu sebelum bug lain muncul.

## Tantangan interaktif (tersedia di versi solusi)

Tombol **Ganti Tema** (terang/gelap) memakai `classList.toggle`. Ide tantangan tambahan: tombol "Hapus semua yang selesai", penghitung karakter pada input.
