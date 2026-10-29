import { Link } from "react-router-dom";
import mahasiswa from "../../mahasiswa.json";
import useKoleksi from "../hooks/useKoleksi";

export default function Beranda() {
  const { items, loading } = useKoleksi();

  // set menghapus kategori duplikat sehingga size menghitung kategori unik saja
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section className="beranda">
      <h1>
        Train Smarter.
        <br />
        Move Better.
        <br />
        Life Healthier.
      </h1>
      <p>{mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat Daftar...</p> // saat loading, tampilnya pesan memuat, bukan angka 0
      ) : (
        <p>
          Ada {items.length} latihan olahraga dengan {jumlahKategori} kategori.
        </p>
      )}
      {/*tag Link berpindah halaman tanpa memuat ulang aplikasi*/}
      <Link to="/koleksi">Lihat latihan lainya</Link>
    </section>
  );
}
