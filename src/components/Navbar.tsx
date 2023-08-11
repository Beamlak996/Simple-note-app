import { Navbar as NavbarBs, Container, Stack, Button } from "react-bootstrap"
import { BiAddToQueue } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <NavbarBs className="shadow-sm bg-white mb-3">
        <Container className="d-flex align-items-center">
            <h1 className="me-auto">Notes</h1>
            <Stack direction="horizontal" gap={2}>
                <Button variant="outline-primary" onClick={()=>navigate("/add")} type="button" >
                    <BiAddToQueue />
                </Button>
            </Stack>
        </Container>
    </NavbarBs>
  )
}

export default Navbar
