import { useState } from "react";
import { useNote } from "../context/NoteContext";
import SingleNote from "./SingleNote";
import { Button, Form, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NoteList = () => {
  const navigate = useNavigate();
  const { notes } = useNote();
  const [query, setQuery] = useState<string>("");

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(query.toLocaleLowerCase());
  });

  return (
    <>
      <Form>
        <Form.Control
          className='rounded-pill p-3 mb-4'
          placeholder='Type To Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
      <ul className='list-group mb-4'>
        {filteredNotes.map((note) => {
          return <SingleNote key={note.id} {...note} />;
        })}
        <Stack direction='horizontal' className='mt-4'>
          <Button
            variant='primary'
            onClick={() => navigate("/add")}
            className='ms-auto'
          >
            Add Note
          </Button>
        </Stack>
      </ul>
    </>
  );
};

export default NoteList;
