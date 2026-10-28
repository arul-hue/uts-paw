export default function PesanStatus({ loading, error }) {
  // return awal menampilkan pesan loading atau error
  if (loading) return <p>Memuat data...</p>;
  if (error) return <p role="alert">Gagal memuat: {error}</p>;
  return null;
}
