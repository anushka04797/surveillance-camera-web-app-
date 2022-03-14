import React, { useEffect, useRef, useState } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
 } from "reactstrap";

function Typography() {

 

  const [isOpen, setOpen] = useState(false);

  const toggleDropDown = () => {
    setOpen(!isOpen);
  };

  const [isOpen1, setOpen1] = useState(false);

  const toggleDropDown1 = () => {
    setOpen1(!isOpen1);
  };

  const [isOpen2, setOpen2] = useState(false);

  const toggleDropDown2 = () => {
    setOpen2(!isOpen2);
  };

  const [isOpen3, setOpen3] = useState(false);

  const toggleDropDown3 = () => {
    setOpen3(!isOpen3);
  };

  const [isOpen4, setOpen4] = useState(false);

  const toggleDropDown4 = () => {
    setOpen4(!isOpen4);
  };

  const video_options = ["All ", "Online ", "Offline "];
  const [video_option, setvideoOption] = useState("All");
  return (
    <>
      <div className="content">

      <Row>
            <Col md="9">
              </Col>
              <Col md="3">
                <p>November <i class="fa fa-calendar" aria-hidden="true"></i></p>
                
                </Col>
          </Row>
        <Row>
          
          <Col md="8" className="py-2">
          <p>27 November, 2022</p>
          </Col>
          <Col md="4">
          <Dropdown isOpen={isOpen} toggle={toggleDropDown}  size="sm">
                    <DropdownToggle>{video_option} <i class="fas fa-caret-down"></i></DropdownToggle>
                   
                    <DropdownMenu>
                    {video_options.map((item, idx) => (
                      <DropdownItem
                        key={idx}
                       // onClick={} //arrow function
                        style={{ color: "black" }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>       
          </Dropdown>
            </Col>
        </Row>
      

    
        <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
           <img src="cat.jpg"></img>
          </Col>
        </Row>

        <Row className="py-4">
          <Col md="8" >
          <p>27 November, 2022</p>
          </Col>
          <Col md="4">
          <Dropdown isOpen={isOpen1} toggle={toggleDropDown1}  size="sm">
                    <DropdownToggle>{video_option} <i class="fas fa-caret-down"></i></DropdownToggle>
                   
                    <DropdownMenu>
                    {video_options.map((item, idx) => (
                      <DropdownItem
                        key={idx}
                       // onClick={} //arrow function
                        style={{ color: "black" }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>       
          </Dropdown>
            </Col>
        </Row>

        <Row >
        <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
           <img src="cat.jpg"></img>
          </Col>
        </Row>

        <Row className="py-4">
          <Col md="8">
          <p>27 November, 2022</p>
          </Col>
          <Col md="4">
          <Dropdown isOpen={isOpen2} toggle={toggleDropDown2}  size="sm">
                    <DropdownToggle>{video_option} <i class="fas fa-caret-down"></i></DropdownToggle>
                   
                    <DropdownMenu>
                    {video_options.map((item, idx) => (
                      <DropdownItem
                        key={idx}
                       // onClick={} //arrow function
                        style={{ color: "black" }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>       
          </Dropdown>
            </Col>
        </Row>


        <Row>
        <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
           <img src="cat.jpg"></img>
          </Col>
        </Row>
         

        <Row className="py-4">
          <Col md="8">
          <p>27 November, 2022</p>
          </Col>
          <Col md="4">
          <Dropdown isOpen={isOpen3} toggle={toggleDropDown3}  size="sm">
                    <DropdownToggle>{video_option} <i class="fas fa-caret-down"></i></DropdownToggle>
                   
                    <DropdownMenu>
                    {video_options.map((item, idx) => (
                      <DropdownItem
                        key={idx}
                       // onClick={} //arrow function
                        style={{ color: "black" }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>       
          </Dropdown>
            </Col>
        </Row>


         <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className="  rounded "
          >
            

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
           <img src="cat.jpg"></img>
          </Col>
        </Row>

        
        <Row className="py-4" >
          <Col md="8">
          <p>27 November, 2022</p>
          </Col>
          <Col md="4">
          <Dropdown isOpen={isOpen4} toggle={toggleDropDown4}  size="sm">
                    <DropdownToggle>{video_option} <i class="fas fa-caret-down"></i></DropdownToggle>
                   
                    <DropdownMenu>
                    {video_options.map((item, idx) => (
                      <DropdownItem
                        key={idx}
                       // onClick={} //arrow function
                        style={{ color: "black" }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>       
          </Dropdown>
            </Col>
        </Row>


        <Row>

         
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
            

            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="rounded "
          >
            <img src="cat.jpg"></img>
          </Col>
          <Col
            md="4"
            style={{ width: "262px" }}
            className=" rounded "
          >
           <img src="cat.jpg"></img>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default Typography;
