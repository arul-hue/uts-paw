import useKoleksi from "../hooks/useKoleksi.js";

export default function Koleksi() {
  const { items, loading, error } = useKoleksi();

  // Return awal menampilkan pesan loading atau error sebelum daftar dirender
  if (loading) return <p>Memuat data...</p>;
  if (error) return <p role="alert">Gagal memuat: {error}</p>;

  return (
    <section>
      <h1>Koleksi</h1>
      <ul>
        {/*map membuat elemen li untuk setiap item, sedangkan key menggunakan id unik*/}
        {items.map((item) => (
          <li key={item.id}>{item.judul}</li>
        ))}
      </ul>
    </section>
  );
}
