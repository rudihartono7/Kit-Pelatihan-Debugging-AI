# Silabus: Debugging & Scripting dengan AI

**Sasaran peserta:** Pemula JavaScript (sudah kenal variabel dan `console.log`)
**Durasi:** 60 menit | **Format:** Online (Zoom/Meet), praktik langsung
**Alat:** VS Code + Live Server, Claude (claude.ai), browser dengan DevTools

## Tujuan Pembelajaran

Setelah sesi ini peserta mampu:

1. Menulis dan memanggil **function** sederhana dengan parameter dan nilai kembalian.
2. Menyimpan data dalam **array** berisi **object**, lalu menambah, mencari, memfilter, dan menghapus data.
3. Menambahkan **event listener** agar halaman merespons klik dan submit form.
4. Membaca pesan error di Console dan memakai **AI (Claude)** untuk menemukan serta memahami bug.
5. Menambahkan satu perilaku interaktif sederhana (tantangan: tombol ganti tema).

## Rundown 60 Menit

| Menit | Durasi | Sesi | Format | Slide |
|---|---|---|---|---|
| 0-5 | 5 | Pembukaan, tujuan, demo aplikasi "Daftar Tugas Mini" | Ceramah + demo | 1-3 |
| 5-12 | 7 | Function | Penjelasan + live coding | 4-5 |
| 12-20 | 8 | Array & Object | Penjelasan + live coding | 6-8 |
| 20-26 | 6 | Event & interaktivitas | Penjelasan + live coding | 9-10 |
| 26-34 | 8 | Debugging dengan AI: baca error, menulis prompt yang baik | Demo instruktur | 11-13 |
| 34-54 | 20 | **Hands-on Lab:** perbaiki 4 bug + tantangan tema | Praktik mandiri/berpasangan | 14 |
| 54-58 | 4 | Review jawaban, diskusi, kesalahan umum | Diskusi | 15 |
| 58-60 | 2 | Rangkuman dan tugas lanjutan | Penutup | 16-17 |

## Catatan Fasilitator

- **Persiapan 10 menit sebelum kelas:** kirim folder `latihan-bug/` ke peserta (zip atau link). Pastikan Live Server terpasang. Minta peserta login ke claude.ai di tab terpisah.
- **Kelas online:** minta peserta membagikan layar saat lab jika macet. Gunakan breakout room berpasangan bila platform mendukung.
- **Aturan emas AI:** AI adalah asisten belajar, bukan pengganti pemahaman. Peserta harus menjelaskan dengan kata sendiri mengapa perbaikan bekerja sebelum menyalinnya.
- **Jika waktu mepet:** potong sesi Event (menit 20-26) menjadi 3 menit, dan jadikan bug 4 sebagai bonus.
- **Jika peserta cepat selesai:** berikan tantangan tambahan di `README.md`.

## Penilaian Cepat (formatif)

- Peserta menunjukkan aplikasi berjalan tanpa error di Console.
- Peserta mampu menjelaskan satu bug: gejala, penyebab, perbaikan.
- Peserta menunjukkan satu prompt yang mereka kirim ke AI beserta hasilnya.

## Tugas Lanjutan (opsional)

1. Tambahkan tombol "Hapus semua yang selesai".
2. Simpan daftar tugas ke `localStorage`.
3. Minta AI menjelaskan kode yang belum dipahami, lalu tulis ulang dengan kata sendiri.
