import useKoleksi from "../hooks/useKoleksi.js";

export default function Statistik() {
  const { items } = useKoleksi();
  const perKategori = items.reduce(
    (hitung, { kategori }) => ({
      ...hitung,
      [kategori]: (hitung[kategori] ?? 0) + 1,
    }),
    {},
  );
  return (
    <section>
      <h1>Statistik</h1>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {/*Object.entries ubah objek perkategori menjadi pasangan nama dan jumlah*/}
          {/*destructuring mengambil isi kategori dan jumlah dari setiap pasangan*/}
          {/*map membuat baris tabel sesuai kategori key unik*/}
          {Object.entries(perKategori).map(([kategori, jumlah]) => (
            <tr key={kategori}>
              <td>{kategori}</td>
              <td>{jumlah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
