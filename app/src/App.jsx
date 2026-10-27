// import { Route, Routes } from 'react-router-dom'
// import mahasiswa from '../mahasiswa.json'

// // Titik awal ujian. Baca soal lengkap di https://uts-paw.mhabibalgifari.web.id/soal
// // dan contoh setiap kode yang diminta di https://uts-paw.mhabibalgifari.web.id/contoh
// // Rute wajib: /, /koleksi, /koleksi/:id, /tambah, /statistik, /tentang, dan *.
// // Provider Context diletakkan di dalam komponen App ini.

// function Beranda() {
//   return (
//     <main>
//       <h1>Ujian Tengah Semester Pengembangan Aplikasi Web</h1>
//       <p>
//         {mahasiswa.nama || 'Nama belum diisi'} ({mahasiswa.nim || 'NIM belum diisi'})
//       </p>
//     </main>
//   )
// }

// function TidakDitemukan() {
//   return (
//     <main>
//       <h1>404</h1>
//       <p>Halaman tidak ditemukan.</p>
//     </main>
//   )
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Beranda />} />
//       <Route path="*" element={<TidakDitemukan />} />
//     </Routes>
//   )
// }

import { Route, Routes } from "react-router-dom";
import { KoleksiProvider } from "./context/KoleksiProvider.jsx";
import Layout from "./components/Layout.jsx";
import Beranda from "./pages/Beranda.jsx";
import Koleksi from "./pages/Koleksi.jsx";
import Detail from "./pages/Detail.jsx";
import Tambah from "./pages/Tambah.jsx";
import Statistik from "./pages/Statistik.jsx";
import Tentang from "./pages/Tentang.jsx";
import TidakDitemukan from "./pages/TidakDitemukan.jsx";

export default function App() {
  return (
    <KoleksiProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/koleksi" element={<Koleksi />} />
          <Route path="/koleksi/:id" element={<Detail />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="*" element={<TidakDitemukan />} />
        </Route>
      </Routes>
    </KoleksiProvider>
  );
}
