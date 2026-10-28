import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import "./Tambah.css";

const AWAL = {
  judul: "",
  kategori: "kekuatan",
  tanggal: "",
  durasi: "",
  kalori: "",
};

export default function Tambah() {
  const { tambah } = useKoleksi();
  const navigate = useNavigate(); // navigate memindahkan pengguna pas data data tersimpan
  const [form, setForm] = useState(AWAL);
  const [galat, setGalat] = useState("");

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const simpan = (e) => {
    e.preventDefault();
    if (form.judul.trim().length < 3) {
      setGalat("Judul wajib diisi, minimal 3 karakter.");
      return;
    }
    tambah({ ...form, judul: form.judul.trim() });
    navigate("/koleksi");
  };

  return (
    // setiap field tema memakai label dan input yang terhubung, dan nilai awal di AWAL
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tugas</h1>
      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}{" "}
      <label htmlFor="kategori">Kategori</label>
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
      <label htmlFor="tanggal">Tanggal</label>
      <input
        id="tanggal"
        name="tanggal"
        type="date"
        value={form.tanggal}
        onChange={ubah}
      />
      <label htmlFor="durasi">Durasi (menit)</label>
      <input
        id="durasi"
        name="durasi"
        type="number"
        value={form.durasi}
        onChange={ubah}
      />
      <label htmlFor="kalori">Kalori Terbakar (kkal)</label>
      <input
        id="kalori"
        name="kalori"
        type="number"
        value={form.kalori}
        onChange={ubah}
      />
      <button type="submit">Simpan</button>
    </form>
  );
}
