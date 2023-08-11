import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
import { Note, useNote } from "../context/NoteContext";

const NoteLayout = () => {
  const { id } = useParams();
  const { notes } = useNote();

  const note = notes.find((n) => n.id === id);
  if (note === null) return <Navigate to='/' replace />;

  return <Outlet context={note} />

};


export const useNoteOutlet = ()=>{
    return useOutletContext<Note>()
}

export default NoteLayout;
