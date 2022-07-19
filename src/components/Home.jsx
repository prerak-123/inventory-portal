import { useState } from 'react';
import '../CSS/Home.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import logo_male from '../assets/user_male.svg'
import logo_female from '../assets/user_female.svg'
import '../assets/fonts.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import EmailIcon from '@mui/icons-material/Email';
import Form from 'react-bootstrap/Form'
import swal from 'sweetalert';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function RenderReview(props){

  return(
    <>
      
      <div className='usr__img'>
        <img src={props.isMale? logo_male: logo_female}/>
      </div>

      <div className='review'>
        <div className='review__content'>
          "{props.review}"
        </div>

        <div className='review__stars'>
          
          {[...Array(props.stars)].map((e, i) => <StarIcon key={i} fontSize='large' style={{color: "rgb(255,233,0"}}/>)}

          {[...Array(5 - props.stars)].map((e, i) => <StarBorderIcon key={i} fontSize='large'/>)}

        </div>

        <div className='reviewer__name'>
          -{props.name}
        </div>

        <div style={{fontStyle: 'italic'}}>
          {props.post}
        </div>
        
      </div>   
    </>
  )
}
function Home(){

  const [show, setShow] = useState(false);

  const handleShow = () => {setShow(true)};
  const handleClose = () => {setShow(false)};

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(false);
    swal("Success", "Registered to Newsletter.", "success")
  }

  return(
    <div className="main">

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Newsletter</Modal.Title>
        </Modal.Header>

        <Modal.Body >

          <div style={{fontSize: "20px", color: "rgb(25,25,112)"}}>
            Stay up to date with the latest equipments added to the inventory.
          </div>
      
          <form onSubmit={handleSubmit} style={{marginTop: "10px"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="number"
                min="1"
                required
              />
            </Form.Group>

            <Button variant="contained" type="submit">Subscribe</Button>
          </form>

        </Modal.Body>
      </Modal>
      
      <AutoplaySlider
        style={{height: "50vh", width: "70vw", marginLeft: "auto", marginRight: "auto"}} 
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >

        <div className="review__component">
          <RenderReview isMale={true} name="Harsh Sarna" review="One of the best PG residencies in Banglore with a large inventory of items." stars={4} post="Software Engineer at Infosys"/>
        </div>

        <div className="review__component">
          <RenderReview isMale={false} name="Trishna Ravi" review="Amazing rooms, great location, affordable price!" stars={5} post="Intern at Mcafee Software India Pvt Ltd"/>
        </div>

        <div className="review__component">
          <RenderReview isMale={true} name="Vijaya Rajan" review="Fast Wi-Fi, clean bathrooms, great experience." stars={4} post="Works at Oracle India Pvt Ltd"/>
        </div>

      </AutoplaySlider>

      <Button style={{marginLeft: "auto", marginRight: "auto", marginTop: "90px", width: "20vw", fontSize: "2vw"}} onClick={handleShow} variant='contained' color='secondary' startIcon={<EmailIcon/>}>
        Subscribe
      </Button>
    </div>   
  )
}

export default Home