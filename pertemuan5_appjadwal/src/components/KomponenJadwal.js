// KomponenJadwal.js
import { useState } from "react";
import { useJadwal } from "../context/JadwalContext";
import EditJadwal from "./EditJadwal";

const KomponenJadwal = ({ jdwl }) => {
  const { hapusJadwal } = useJadwal();
  const [isEditing, setIsEditing] = useState(false);

  if (!jdwl || !jdwl.tugas) return null;

  return (
    <li>
      {isEditing ? (
        <EditJadwal jdwl={jdwl} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          {jdwl.tugas}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => hapusJadwal(jdwl.id)}>Hapus</button>
        </>
      )}
    </li>
  );
};

export default KomponenJadwal;