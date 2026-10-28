export default function PesanStatus({ loading, error }) {
  // Return awal menampilkan pesan loading atau error sebelum daftar dirender
  if (loading) return <p>Memuat data...</p>;
  if (error) return <p role="alert">Gagal memuat: {error}</p>;
  return null;
}
