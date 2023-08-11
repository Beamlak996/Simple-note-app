import { Form, Stack, Button } from "react-bootstrap";
import { useNoteOutlet } from "../components/NoteLayout";
import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react"
import { useNote } from "../context/NoteContext";


const EditNote = () => {
  const note = useNoteOutlet()
  const [title, setTitle] = useState<string>(note.title)
  const [desc, setDesc] = useState<string>(note.description)

  const { editNote } = useNote() 

  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent)=>{
    e.preventDefault()
    const id = note.id
    editNote(id, title, desc)
    navigate("/")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='title' className='mb-2'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          placeholder='Title..'
          className='shadow-sm p-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId='description' className='mb-4'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          as='textarea'
          rows={15}
          className='shadow-sm'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Form.Group>
      <Stack direction='horizontal' gap={2}>
        <Button type='submit' className='ms-auto' variant="primary">Save</Button>
        <Button type='button' variant='danger' onClick={() => navigate("/")}>
          Back
        </Button>
      </Stack>
    </Form>
  );
}

export default EditNote
