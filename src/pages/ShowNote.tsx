import { Form, Stack, Button } from "react-bootstrap";
import { useNoteOutlet } from "../components/NoteLayout";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const note = useNoteOutlet();

  const navigate = useNavigate()

  return (
    <Form>
      <Form.Group controlId='title' className='mb-2'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          placeholder='Title..'
          className='shadow-sm p-2'
          disabled
          value={note.title}
        />
      </Form.Group>
      <Form.Group controlId='description' className='mb-4'>
        <Form.Label>Description</Form.Label>
        <Form.Control required as='textarea' rows={15} className='shadow-sm' disabled value={note.description} />
      </Form.Group>
      <Stack direction='horizontal'>
          <Button type='button' variant='danger' className='ms-auto' onClick={()=>navigate("..")}>
            Back
          </Button>
      </Stack>
    </Form>
  );
};

export default Note;
