import { useContext } from "react";
import { KoleksiContext } from "../context/koleksiContext.js";

// useContext mengambil data dari Provider error memberi tahu jika hook digunakan di luar Provider
export default function useKoleksi() {
  const konteks = useContext(KoleksiContext);
  if (!konteks)
    throw new Error("useKoleksi harus dipakai di dalam <KoleksiProvider>");
  return konteks;
}
