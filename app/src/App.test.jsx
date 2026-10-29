import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, expect, test } from "vitest";
import App from "./App.jsx";

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
// test('rute tidak dikenal menampilkan 404', () => {
//   render(
//     <MemoryRouter initialEntries={['/tidak-ada']}>
//       <App />
//     </MemoryRouter>,
//   )
//   expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
// })

beforeEach(() => {
  localStorage.setItem(
    "uts-paw-koleksi",
    JSON.stringify([
      {
        id: "1",
        judul: "Jogging",
        kategori: "Kardio",
        tanggal: "2026-10-13",
        durasi: 35,
        kalori: 320,
      },
      {
        id: "2",
        judul: "Push up",
        kategori: "Kekuatan",
        tanggal: "2026-10-14",
        durasi: 15,
        kalori: 100,
      },
      {
        id: "3",
        judul: "Yoga",
        kategori: "Fleksibilitas",
        tanggal: "2026-10-24",
        durasi: 30,
        kalori: 90,
      },
      {
        id: "4",
        judul: "Squat",
        kategori: "Kekuatan",
        tanggal: "2026-10-16",
        durasi: 20,
        kalori: 130,
      },
    ]),
  );
});

test("rute tidak dikenal menampilkan 404", () => {
  render(
    <MemoryRouter initialEntries={["/tidak-ada"]}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
});

test("Beranda menampilkan jumlah latihan dan jumlah kategori unik", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );
  expect(
    screen.getByText("Ada 4 latihan olahraga dengan 3 kategori."),
  ).toBeInTheDocument();
});

test("Koleksi menampilkan semua item dari data", () => {
  render(
    <MemoryRouter initialEntries={["/koleksi"]}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole("link", { name: "Jogging" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Push up" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Yoga" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Squat" })).toBeInTheDocument();
});

test("pencarian di Koleksi menyaring item tanpa membedakan huruf besar dan kecil", () => {
  render(
    <MemoryRouter initialEntries={["/koleksi"]}>
      <App />
    </MemoryRouter>,
  );
  fireEvent.change(screen.getByLabelText("Cari judul"), {
    target: { value: "YOGA" },
  });
  expect(screen.getByRole("link", { name: "Yoga" })).toBeInTheDocument();
  expect(
    screen.queryByRole("link", { name: "Jogging" }),
  ).not.toBeInTheDocument();
});

test("filter kategori di Koleksi hanya menampilkan kategori yang dipilih", () => {
  render(
    <MemoryRouter initialEntries={["/koleksi"]}>
      <App />
    </MemoryRouter>,
  );
  fireEvent.change(screen.getByLabelText("Kategori"), {
    target: { value: "Kekuatan" },
  });
  expect(screen.getByRole("link", { name: "Push up" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Squat" })).toBeInTheDocument();
  expect(
    screen.queryByRole("link", { name: "Jogging" }),
  ).not.toBeInTheDocument();
});

test("form Tambah menolak judul kurang dari 3 karakter", () => {
  render(
    <MemoryRouter initialEntries={["/tambah"]}>
      <App />
    </MemoryRouter>,
  );
  fireEvent.change(screen.getByLabelText("Judul"), { target: { value: "ab" } });
  fireEvent.click(screen.getByRole("button", { name: "Simpan" }));
  expect(screen.getByRole("alert")).toHaveTextContent("minimal 3 karakter");
});

//penjelasan singkat

// screen.getByRole(...), cari elemen berdasarkan perannya (heading, link, button, alert) error kalau tidak ketemu
// screen.getByText(...), cari elemen berdasarkan teks yang tampil
// screen.getByLabelText(), cari kolom input berdasarkan labelnya
// screen.queryByRole(...), sama seperti getByRole, tapi tidak error kalau tidak ada (dipakai untuk cek "harus hilang")

// fireEvent.change(...), seperti user mengetik di input atau memilih opsi di select
// fireEvent.click(...), seperti user mengklik tombol
