import { Link } from "react-router-dom";

export default function KartuItem({ item }) {
  const { id, judul, kategori, tanggal } = item;
  return (
    <article className="kartu">
      <h3>
        {/*tag link menggunakan id sebagai parameter URL*/}
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} · {tanggal}
      </p>
    </article>
  );
}
