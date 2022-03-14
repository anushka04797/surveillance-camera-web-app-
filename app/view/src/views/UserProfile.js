import React from "react";
import { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {

  // const [username,setUserName]=useState('')
  // const [email,setEmail]=useState('')
  // const [firstname,setFirstName]=useState('')
  // const [lastname, setLastName]=useState('')
  // const [city,setCity]=useState('')
  // const [postalcode,setPostalCode]=useState('')
  // const [address,setAddress]=useState('')
  // const [usercountry,setCountry]=useState('')
  // const [aboutme,setAboutMe]=useState('')
  
  // const [user,setUser]= useState({username: "",
  //                                 email:"",
  //                                 firstName:"",
  //                                 lastName:"",
  //                                 country:"",
  //                                 city:"",
  //                                 address: "",
  //                                 postalcode:"",
                                  
  // })

  const [user,setUser]= useState({old_password: "",
                                  new_password:"",
                                  confirm_new_password:"",
                                                                 
  })

  const setUserProfile = (e) => {
    setUser({...user, [e.target.name]: e.target.value});

    
  }

  

  // function checkPassword()
  // {
  //    if (user.old_password===user.new_password)
  //      alert("New Password can not be the same as the old one!");
  // }
  
 function onSave(){
  
  console.log('user',user);
  if (user.old_password===user.new_password)
  {
       alert("New Password can not be the same as the old one!");
      //  setUser(user.new_password="");
      //  setUser(user.confirm_new_password="");
  }
      if(user.new_password!=user.confirm_new_password)
      alert("Passwords don't match");

      // user.old_password.value="";
      // user.old_password="";
      // user.new_password="";

      setUser({
        old_password:"", new_password:"", confirm_new_password:""
      })
  }

  function onCancel(){

    setUser({
      old_password:"", new_password:"", confirm_new_password:""
    })

  }


 const submit_form=()=>[
  alert('u clicked submit')
 ]

 const [visible, setVisible] = React.useState(false);
 const [visible1, setVisible1] = React.useState(true);

  return (
    <>
      <div className="content">
        <Row>
        {visible1 && 
        <Col md="12">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />
                    <h5 className="title">Martin Bator <i class="fas fa-edit"></i>  </h5>
                  </a>
                  <p className="description">martin.bator@example.com  <i class="fas fa-edit"></i> </p>
                </div>
                <div className="card-description">

                
                 <p
                 onClick={() => { setVisible(!visible); setVisible1(!visible1) }}>Change Password</p>
                </div>
              </CardBody>
            </Card>
          </Col>
            }

          {visible && 
          <Col md="12" >
            <Card style={{width:"80%", height:"100%"}}>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submit_form}>
                  
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Old Password</label>
                        <Input
                          name="old_password"
                          placeholder="********"
                          type="password"
                          value={user.old_password}
                          onChange={setUserProfile}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                    <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>New Password</label>
                        <Input
                          name="new_password"
                          placeholder="********"
                          type="password"
                          value={user.new_password}
                        
                          onChange={setUserProfile}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Confirm New Password</label>
                        <Input
                          name= "confirm_new_password"
                          placeholder="********"
                          type="password"
                          value={user.confirm_new_password}
                          onChange={setUserProfile}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  
                </Form>
              </CardBody>
              <CardFooter>
              <Button onClick={onCancel} className="btn-fill" color="primary" type="button">
                  Cancel
                </Button>
                <Button className="btn-fill" color="primary" type="button" onClick={() => { setVisible1(!visible1); setVisible(!visible) }}>
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          }
          
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
