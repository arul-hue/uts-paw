import { useEffect, useState } from "react";

// mengambil data dari localStorage saat komponen pertama kali dijalankan
export default function useLocalStorage(kunci, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    const tersimpan = localStorage.getItem(kunci);
    return tersimpan ? JSON.parse(tersimpan) : nilaiAwal;
  });

  // useEffect menyimpan perubahan nilai ke localStorage setiap kali nilai berubah/render
  useEffect(() => {
    if (nilai === null) localStorage.removeItem(kunci);
    else localStorage.setItem(kunci, JSON.stringify(nilai));
  }, [kunci, nilai]);

  return [nilai, setNilai];
}
