import { useState } from "react";
import useKoleksi from "../hooks/useKoleksi.js";
import KotakPencarian from "../components/KotakPencarian.jsx";
import KartuItem from "../components/KartuItem.jsx";

// State cari dikelola di halaman Koleksi dan diteruskan ke KotakPencarian melalui props
export default function Koleksi() {
  const { items, loading, error } = useKoleksi();
  const [cari, setCari] = useState("");

  // Return awal menampilkan pesan loading atau error sebelum daftar dirender
  if (loading) return <p>Memuat data...</p>;
  if (error) return <p role="alert">Gagal memuat: {error}</p>;

  // Filter dan toLowerCase memungkinkan pencarian tanpa membedakan huruf besar dan kecil.
  const tampil = items.filter((item) =>
    item.judul.toLowerCase().includes(cari.toLowerCase()),
  );

  return (
    <section>
      <h1>Koleksi</h1>
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada item yang cocok.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            // Data item dikirim melalui props dan diambil dengan destructuring
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
