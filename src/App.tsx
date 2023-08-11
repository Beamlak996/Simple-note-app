import Navbar from "./components/Navbar"
import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import NoteLayout from "./components/NoteLayout";
import ShowNote from "./pages/ShowNote";

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
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
