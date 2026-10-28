import { Link, useNavigate, useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";

// semua hook dipanggil di awal komponen sebelum return bersyarat
export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, loading, hapus } = useKoleksi();
  // string menyamakan tipe id agar bisa dibandingkan dengan data
  const item = items.find((i) => String(i.id) === id);

  // jika item tidak ditemukan, akan menampilkan pesan dan tautan kembali tanpa menulis 404
  if (loading) return <p>Memuat data...</p>;
  if (!item) {
    return (
      <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    );
  }

  // kalau pengguna memilih OK pada confirm, item dihapus lalu diarahkan ke halaman Koleksi
  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id);
      navigate("/koleksi");
    }
  };

  // dl, dt, dan dd dipakai untuk menampilkan label dan nilai sesuai tema
  return (
    <section>
      <h1>{item.judul}</h1>
      <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>
        <dt>Tanggal</dt>
        <dd>{item.tanggal}</dd>
        <dt>Durasi</dt>
        <dd>{item.durasi} menit</dd>
        <dt>Kalori Terbakar</dt>
        <dd>{item.kalori} kkal</dd>
      </dl>
      <div className="aksi">
        <button type="button" onClick={konfirmasiHapus}>
          Hapus
        </button>
        <Link to="/koleksi">Kembali</Link>
      </div>
    </section>
  );
}
