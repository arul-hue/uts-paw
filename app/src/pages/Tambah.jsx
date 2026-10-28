import { useState } from "react";

const AWAL = { judul: "", kategori: "Kuliah" };

// semua field disimpan dalam satu objek form dengan nilai awal dari AWAL
export default function Tambah() {
  const [form, setForm] = useState(AWAL);

  // e.target.name menentukan field yang diubah, dan ...form mempertahankan field lainnya
  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    // htmlFor harus sama dengan id input agar label terhubung dengan kotaknya
    <form>
      <h1>Tambah Tugas</h1>
      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      <label htmlFor="kategori">Kategori</label>
      {/*value menampilkan nilai state, onChange mengubah*/}
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option>Kekuatan</option>
        <option>Kardio</option>
        <option>Fleksibilitas</option>
      </select>
      <button type="submit">Simpan</button>
      {/*bagian dibawah buat melihat state*/}
      <p>Isi state saat ini: {JSON.stringify(form)}</p>
    </form>
  );
}
