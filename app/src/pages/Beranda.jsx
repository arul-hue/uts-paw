import { Link } from "react-router-dom";
import mahasiswa from "../../mahasiswa.json";
import useKoleksi from "../hooks/useKoleksi";

export default function Beranda() {
  const { items, loading } = useKoleksi();
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section>
      <h1>Beranda</h1>
      <p>{mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat Daftar...</p>
      ) : (
        <p>
          ada {items.length} latihan olahraga dengan {jumlahKategori} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat latihan lainya</Link>
    </section>
  );
}
