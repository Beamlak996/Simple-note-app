import { Stack, Button } from "react-bootstrap";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNote } from "../context/NoteContext";

const SingleNote = ({ id, title }: { id: string; title: string }) => {

  const { deleteNote } = useNote()

  const handleDelete = ()=>{
    deleteNote(id)
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span>{title}</span>
      <Stack direction='horizontal' gap={3}>
        <Button variant='outline-success'>
          <Link to={`/${id}`} className='text-reset text-decoration-none'>
            <GrView />
          </Link>
        </Button>
        <Button variant='outline-warning'>
          <Link to={`/${id}/edit`} className='text-reset text-decoration-none'>
            <BiEditAlt />
          </Link>
        </Button>
        <Button variant='outline-danger' onClick={handleDelete} >
          <RiDeleteBin5Line />
        </Button>
      </Stack>
    </li>
  );
};

export default SingleNote;
