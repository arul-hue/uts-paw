import { useState } from "react";
import useKoleksi from "../hooks/useKoleksi.js";
import KotakPencarian from "../components/KotakPencarian.jsx";
import KartuItem from "../components/KartuItem.jsx";
import PesanStatus from "../components/PesanStatus.jsx";
import PilihKategori from "../components/PilihKategori.jsx";

export default function Koleksi() {
  const { items, loading, error } = useKoleksi();
  const [cari, setCari] = useState("");
  const [kategori, setKategori] = useState("Semua");

  if (loading || error) return <PesanStatus loading={loading} error={error} />;

  // kategori unik dibuat dengan Set, lalu ditambahkan pilihan "Semua"
  const daftarKategori = [
    "Semua",
    ...new Set(items.map((item) => item.kategori)),
  ];
  const tampil = items.filter(
    (item) =>
      // filter dan toLowerCase memungkinkan pencarian tanpa membedakan huruf besar dan kecil
      item.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (kategori === "Semua" || item.kategori === kategori),
  );

  return (
    <section>
      <h1>Koleksi</h1>
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <PilihKategori
          daftar={daftarKategori}
          nilai={kategori}
          onUbah={setKategori}
        />
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada item yang cocok.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
