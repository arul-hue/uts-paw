import { Link } from "react-router-dom";
import mahasiswa from "../../mahasiswa.json";
import useKoleksi from "../hooks/useKoleksi";
import "./Beranda.css";

export default function Beranda() {
  const { items, loading } = useKoleksi();

  // set menghapus kategori duplikat sehingga size menghitung kategori unik saja
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section className="hero">
      <h1>
        Train <span>Smarter.</span>
        <br />
        Move <span>Better.</span>
        <br />
        Life <span>Healthier.</span>
      </h1>
      <p className="tema">Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat Daftar...</p> // saat loading, tampilnya pesan memuat, bukan angka 0
      ) : (
        <p className="deskripsi">
          Ada {items.length} latihan olahraga dengan {jumlahKategori} kategori.
        </p>
      )}
      {/*tag Link berpindah halaman tanpa memuat ulang aplikasi*/}
      <Link to="/koleksi" className="tombol">
        Latihan Selengkapnya
      </Link>
    </section>
  );
}
