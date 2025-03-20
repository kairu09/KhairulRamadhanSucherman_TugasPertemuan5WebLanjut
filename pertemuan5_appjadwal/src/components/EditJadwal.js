// EditJadwal.js
import { useState } from "react";
import { useJadwal } from "../context/JadwalContext";

const EditJadwal = ({ jdwl, onClose }) => {
  const [editedTugas, setEditedTugas] = useState(jdwl.tugas);
  const { jadwal, setJadwal } = useJadwal(); // setJadwal sekarang tersedia

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTugas.trim() !== "") {
      const updatedJadwal = jadwal.map((item) =>
        item.id === jdwl.id ? { ...item, tugas: editedTugas.trim() } : item
      );
      setJadwal(updatedJadwal); // Gunakan setJadwal untuk memperbarui state
      onClose(); // Tutup modal atau form edit setelah submit
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editedTugas}
        onChange={(e) => setEditedTugas(e.target.value)}
        placeholder="Edit Jadwal..."
      />
      <button type="submit">Simpan</button>
      <button type="button" onClick={onClose}>
        Batal
      </button>
    </form>
  );
};

export default EditJadwal;