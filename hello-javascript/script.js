// ============================================
// Daftar Tugas Mini - VERSI LATIHAN (ada bug!)
// Tugas Anda: temukan dan perbaiki bug dengan bantuan AI
// ============================================

// 1. ARRAY of OBJECT: menyimpan semua tugas
const tugas = [
  { id: 1, teks: "Belajar JavaScript", selesai: false },
  { id: 2, teks: "Coba debugging dengan AI", selesai: false },
];


function tampilkanHello() {
  console.log("Hello, JavaScript!");
}

tampilkanHello();


let idBerikutnya = 3;

// 2. Ambil elemen dari halaman (DOM)
const form = document.getElementById("form-tugas");
const input = document.getElementById("input-tugas");
const daftar = document.getElementById("daftr");
const pesan = document.getElementById("pesan");
const ringkasan = document.getElementById("ringkasan");
const sapaan = document.getElementById("sapaan");
const tombolTema = document.getElementById("tombol-tema");

// 3. FUNCTION: sapaan sesuai jam
function buatSapaan(jam) {
  if (jam < 11) return "Selamat pagi!";
  if (jam < 15) return "Selamat siang!";
  if (jam < 18) return "Selamat sore!";
  return "Selamat malam!";
}

// 4. FUNCTION: tambah tugas ke array
function tambahTugas(teks) {
  const bersih = teks.trim();
  if (bersih === "") {
    return false; // gagal: kosong
  }
  tugas.push({ id: idBerikutnya, teks: bersih, selesai: false });
  idBerikutnya++;
  return true;
}

// 5. FUNCTION: ubah status selesai / belum
function ubahStatus(id) {
  const item = tugas.find((t) => t.id === id);
  if (item) {
    item.selesai = !item.selesai;
  }
}

// 6. FUNCTION: hapus tugas dari array
function hapusTugas(id) {
  tugas.splice(id, 1);
}

// 7. FUNCTION: hitung tugas yang belum selesai
function hitungSisa() {
  return tugas.filter((t) => t.selesai).length;
}

// 8. FUNCTION: gambar ulang daftar di layar
function tampilkan() {
  daftar.innerHTML = "";

  tugas.forEach((item) => {
    const li = document.createElement("li");
    if (item.selesai) li.classList.add("selesai");

    const span = document.createElement("span");
    span.textContent = item.teks;
    span.addEventListener("click", () => {
      ubahStatus(item.id);
      tampilkan();
    });

    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.className = "hapus";
    tombolHapus.addEventListener("click", () => {
      hapusTugas(item.id);
      tampilkan();
    });

    li.append(span, tombolHapus);
    daftar.appendChild(li);
  });

  ringkasan.textContent = `Sisa tugas: ${hitungSisa()} dari ${tugas.length}`;
}

// 9. EVENT: submit form
form.addEventListener("submit", (e) => {
  const berhasil = tambahTugas(input.value);

  if (berhasil) {
    pesan.textContent = "";
    input.value = "";
  } else {
    pesan.textContent = "Tugas tidak boleh kosong!";
  }
  tampilkan();
});

// 10. TANTANGAN: tombol "Ganti Tema" belum berfungsi.
// Tulis event listener-nya di sini (lihat Panduan Lab).

// 11. Jalankan saat halaman dibuka
sapaan.textContent = buatSapaan(new Date().getHours());
tampilkan();
