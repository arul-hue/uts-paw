import { useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";

// useParams mengambil id dari URL dalam bentuk teks.
export default function Detail() {
  const { id } = useParams();
  const { items, loading } = useKoleksi();
  // String menyamakan tipe id agar bisa dibandingkan dengan data.
  const item = items.find((i) => String(i.id) === id);

  if (loading) return <p>Memuat data...</p>;

  return (
    <section>
      <h1>{item.judul}</h1>
    </section>
  );
}
