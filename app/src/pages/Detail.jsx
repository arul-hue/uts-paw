import { Link, useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";

export default function Detail() {
  const { id } = useParams();
  const { items, loading } = useKoleksi();
  // String menyamakan tipe id agar bisa dibandingkan dengan data
  const item = items.find((i) => String(i.id) === id);

  // Jika item tidak ditemukan, tampilkan pesan dan tautan kembali tanpa menulis 404
  if (loading) return <p>Memuat data...</p>;
  if (!item) {
    return (
      <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    );
  }

  // dl, dt, dan dd digunakan untuk menampilkan label dan nilai sesuai tema
  return (
    <section>
      <h1>{item.judul}</h1>
      <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>
        <dt>Tenggat</dt>
        <dd>{item.tenggat}</dd>
        <dt>Prioritas</dt>
        <dd>{item.prioritas}</dd>
      </dl>
      <Link to="/koleksi">Kembali</Link>
    </section>
  );
}
