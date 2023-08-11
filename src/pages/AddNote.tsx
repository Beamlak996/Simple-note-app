import { FormEvent, useRef } from "react";
import { Form, Stack, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "../context/NoteContext";

const AddNote = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLTextAreaElement>(null)

  const { addNotes } = useNote()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent)=>{
    e.preventDefault()
    addNotes(titleRef.current!.value, descRef.current!.value)
    navigate("..")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='title' className='mb-2'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          placeholder='Title..'
          className='shadow-sm p-2'
          ref={titleRef}
        />
      </Form.Group>
      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control required as='textarea' rows={15} className='shadow-sm' ref={descRef} />
      </Form.Group>
      <Stack direction='horizontal' gap={3} className='mt-4 '>
        <Button variant='outline-primary' className='ms-auto' type="submit">
          Add
        </Button>
        <Link to='..'>
          <Button variant='outline-danger' type="button">Cancel</Button>
        </Link>
      </Stack>
    </Form>
  );
};

export default AddNote;
