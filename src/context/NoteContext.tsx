import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { data } from "../data/data";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type Note = {
  id: string;
  title: string;
  description: string;
};

type NoteContext = {
  notes: Note[];
  addNotes: (title: string, description: string) => void;
  editNote: (id: string, title: string, description: string) => void;
  deleteNote: (id: string) => void
};

const NoteContex = createContext({} as NoteContext);

export const useNote = () => {
  return useContext(NoteContex);
};

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useLocalStorage<Note[]>("Notes", data);

  const addNotes = (title: string, description: string) => {
    setNotes((prev) => {
      return [...prev, { id: uuidV4(), title, description }];
    });
  };

  const editNote = (id: string, title: string, description: string) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { id, title, description };
        } else {
          return note;
        }
      });
    });
  };

  const deleteNote = (id: string)=>{
    setNotes((prevNotes)=>{
        return prevNotes.filter((note) => note.id !== id)
    })
  }

  return (
    <NoteContex.Provider
      value={{
        notes,
        addNotes,
        editNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContex.Provider>
  );
};
