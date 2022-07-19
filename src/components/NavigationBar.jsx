import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Form, Nav } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Navbar from 'react-bootstrap/Navbar';
import GiteIcon from '@mui/icons-material/Gite';
import '../assets/fonts.css'

function NavigationBar(){
  return(
    <>
      <Navbar variant='dark' className='d-flex flex-wrap justify-content-around' style={{background: 'linear-gradient(90deg, rgba(9,1,31,1) 0%, rgba(5,4,136,1) 58%, rgba(0,125,175,1) 100%)'}}>
        <Navbar.Brand style={{fontSize: "1.8em", fontFamily: 'Edu VIC WA NT Beginner'}}>
          <GiteIcon fontSize='large' style={{marginRight: "1vw"}}/>
          Providence House
        </Navbar.Brand>    

        <Nav justify defaultActiveKey="home" style={{fontSize: "1.5em"}}>
          <Nav.Item style={{marginRight: "2vw"}}>
            <Nav.Link eventKey="home">Home</Nav.Link>
          </Nav.Item>

          <Nav.Item style={{marginRight: "2vw"}}>
            <Nav.Link eventKey="music">Music</Nav.Link>
          </Nav.Item>

          <Nav.Item style={{marginRight: "2vw"}}>
            <Nav.Link eventKey="sports">Sports</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="tech">Tech</Nav.Link>
          </Nav.Item>

        </Nav>

        <Button style={{fontSize: "1.4em", paddingLeft: "1vw", paddingRight: "1vw", background: "white", color: "rgb(94, 128, 127)"}}>
          Contact
        </Button>

        <Form className="d-flex" onSubmit={(event)=>{event.preventDefault()}}>
          <Form.Control type='search' placeholder='Search' className="me-2" style={{width: "15vw"}}/>
          <IconButton>
            <SearchIcon style={{color: "white"}}/>
          </IconButton>
        </Form>

      </Navbar>
    </>
  )
}

export default NavigationBar