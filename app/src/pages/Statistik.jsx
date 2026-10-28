import useKoleksi from "../hooks/useKoleksi.js";

export default function Statistik() {
  const { items } = useKoleksi();
  // reduce menghitung jumlah item per kategori, dimulai dari objek kosong
  const perKategori = items.reduce(
    (hitung, { kategori }) => ({
      ...hitung,
      [kategori]: (hitung[kategori] ?? 0) + 1, // jiak kategori belum ada, nilainya dianggap 0 sebelum ditambah 1
    }),
    {},
  );
  return (
    <section>
      <h1>Statistik</h1>
      {/*untuk melihat hasil sementara sebelum diganti tabel*/}
      <pre>{JSON.stringify(perKategori, null, 2)}</pre>
    </section>
  );
}
