import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
  




// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  List,
  ListGroup,
  ListGroupItem,
  ListInlineItem,
  Button, 
  Collapse, 
  
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
 

function Tables() {

  

  const cameras = ["Front Door","Back Door","Meeting Room", "Reception", "Inventory"];

  const updatedList = cameras.map((listItems)=>{
    return  <li style={{padding:'1em'}}>  <img src ="plus.png" onClick={showDetails}></img> {listItems}</li>
});

function showDetails(){
  

  

  alert('hi');
}


function submit_form(){

  alert('u clicked submit');
}


const [isOpen, setIsOpen] = React.useState(false);
const [isOpen1, setIsOpen1] = React.useState(false);
const [isOpen2, setIsOpen2] = React.useState(false);
const [isOpen3, setIsOpen3] = React.useState(false);
const [isOpen4, setIsOpen4] = React.useState(false);
const [isOpen5, setIsOpen5] = React.useState(false);



const [camera,setCamera]= useState({place: "",
cameraID: "",

                               
})

const setNewCamera = (e) => {
setCamera({...camera, [e.target.name]: e.target.value});

}


function onInstall(){

  console.log('camera', camera);
  
}

  return (
    <>
    
      <div className="content">    
      <Row>
        <Col md="12">
         <h4>Cameras</h4>
        </Col>
        <Row>
        <Col md="12">  
        

        <img src ="plus.png" onClick={() => {
                setIsOpen(!isOpen)
            }}></img>
            <p>Front Door</p>
            <Collapse isOpen={isOpen}>
                
            <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded ">
            
             <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >

<p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>

           <img src="cat.jpg"></img>
          </Col>
        </Row>
            </Collapse>

        </Col>

        <Col md="12">  
        

        <img src ="plus.png" onClick={() => {
                setIsOpen1(!isOpen1)
            }}></img><p>Back Door</p>
            <Collapse isOpen={isOpen1}>
                <p>I am sample Text to display</p>
                <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
            

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
           <img src="cat.jpg"></img>
          </Col>
        </Row>
            </Collapse>

        </Col>

        <Col md="12">  
        

        <img src ="plus.png" onClick={() => {
                setIsOpen2(!isOpen2)
            }}></img><p>Meeting Room</p>
            <Collapse isOpen={isOpen2}>
                <p>I am sample Text to display</p>
                <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
           <img src="cat.jpg"></img>
          </Col>
        </Row>
            </Collapse>

        </Col>

        
        <Col md="12">  
        

        <img src ="plus.png" onClick={() => {
                setIsOpen3(!isOpen3)
            }}></img><p>Reception</p>
            <Collapse isOpen={isOpen3}>
                <p>I am sample Text to display</p>
                <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
           <img src="cat.jpg"></img>
          </Col>
        </Row>
            </Collapse>

        </Col>

        <Col md="12">  
        

        <img src ="plus.png" onClick={() => {
                setIsOpen4(!isOpen4)
            }}></img><p>Inventory</p>
            <Collapse isOpen={isOpen4}>
                <p>I am sample Text to display</p>
                <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          > 
          <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            <p>
               camera ID
             </p>

             <Form>
                        
                        <Input
                          name="camID"
                          
                          //type="select"

                          //options="Garage"
                          //value={camera.place}
                         // onChange={setNewCamera}
                        />
             </Form>
           <img src="cat.jpg"></img>
          </Col>
        </Row>
            </Collapse>

        </Col>

        
         </Row>   
        
       
       
       <Col md="12">
         <Button color="secondary" onClick={() => {
                setIsOpen5(!isOpen5)
            }}>
           New Camera
         </Button>
         <Collapse isOpen={isOpen5}>

         <Card>
              <CardHeader>
             <h5 className="title">New Camera</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={onInstall}>
                  <Row>
                  <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Place</label>
                        <Input
                          name="place"
                          
                          //type="select"

                          //options="Garage"
                          value={camera.place}
                          onChange={setNewCamera}
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Camera ID</label>
                        <Input
                          name="cameraID"
                          
                         // type="password"
                          value={camera.cameraID}
                          onChange={setNewCamera}
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                  <Col className="pr-md-1" md="4">
                      <FormGroup>
                       
                        <Button onClick={()=> { onInstall(); setIsOpen5(!isOpen5)}}>

                          Install

                        </Button>
                      </FormGroup>
                    </Col>
                    </Row>
                 
                 </Form>
              </CardBody>
          </Card>

        </Collapse>

       </Col>
   
   </Row>
         </div>
    </>
  );
}

export default Tables;
