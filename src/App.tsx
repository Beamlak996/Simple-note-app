import Navbar from "./components/Navbar"
import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"


import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import NoteLayout from "./components/NoteLayout";
import ShowNote from "./pages/ShowNote";
import NoteList from "./components/NoteList";

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<NoteList />} />
          <Route path='/add' element={<AddNote />} />
          <Route path="/:id" element = { <NoteLayout /> } >
            <Route index element={<ShowNote />} />
            <Route path="edit" element={<EditNote />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App
