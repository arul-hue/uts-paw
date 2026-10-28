export default function Tambah() {
  return (
    // htmlFor harus sama dengan id input agar label terhubung dengan kotaknya
    <form>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" />

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori">
        <option>Kekuatan</option>
        <option>Kardio</option>
        <option>Fleksibilitas</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  );
}
