import React, { useEffect, useRef, useState } from "react";
import { Player } from "video-react";
import UpArrow from "../assets/icons/up-arrow.svg";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import SearchField from "react-search-field";
import SafePondDot from "../assets/icons/safe-pond.svg";
import OfflineDot from "../assets/icons/offline.svg";
import calendar from "../assets/icons/Calendar.svg";
import PaperIcon from "../assets/icons/Paper.svg";
import RefreshIcon from "../assets/icons/refresh.svg";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Nav,
  NavLink,
  NavItem,
  Table,
  ButtonToolbar,
  Row,
  TabContent,
  TabPane,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  Container,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample4,
} from "variables/charts.js";
import "../../src/assets/css/Dashboard.css";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { API } from "config";
import { generate_graph_data_new, generate_graph_data } from "helper";
import { useLocation } from "react-router";
import { useSnackbar } from "notistack";
import store from "store/store";
import { scroller } from "react-scroll";
import OwnerUpdateModal from "components/OwnerUpdateModal/OwnerUpdateModal";
import { USER_ID } from "config";
import { fetchPortableGenerators } from "store/slices/portableGeneratorSlice";
import Map from "./Map";
import GoogleMap from "components/google-map/GoogleMap";
import AgentTrack from "components/google-map/Tracking";
import { MapContainer } from "../components/google-map/GoogleMap";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Dashboard(props) {
  const graph_div_ref = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [showPersonUpdate, setShowPersonUpdate] = useState(false);
  const executeScroll = () => graph_div_ref.current.scrollIntoView();
  // const executeScroll = () => scrollToRef(graph_div_ref)
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [chartDataType, setChartDataType] = React.useState("daily");
  const [selectedData, setSelectedData] = useState({
    data: "ph",
    options: "ph_options",
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  let location = useLocation();
  const portable_generators = useSelector((state) => state.pg.data);
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  // const device_data_ref = React.forwardRef(null)
  {
    /**Code for writing table search */
  }
  function onChange(value, event) {
    console.log(value, event);
    setSearchText(value);
  }
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [currentActiveTab, setCurrentActiveTab] = useState("1");
  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };
  const closeForm = () => {
    setShowTaskForm(false);
  };
  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
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
  
  const [selected_pond, setSelectedPond] = useState();

  const table_view_options = ["Today", "This Week", "This Month", "This Year"];
  const [selected_option, setSelectedOption] = useState("Today");

  const time_view_options = ["Last 1 hr", "Last 6 hrs", "Last 12 hrs", "Last 24 hrs"];
  const [dropdown_time, setdropdownTime] = useState("Last 1 hr");

  const location_view_options = ["All", "Front Door", "Back Door", "Meeting Room", "Reception", "Inventory"];
  const [locations, setlocations] = useState("All");

  const camera_view_options = ["All", "Online", "Offline"];
  const [camera, setcamera] = useState("All");

  const insight_view_options = ["All", "Crossing Barrier", "Opening Door"];
  const [insight, setinsight] = useState("All");

  const [selected_pond_wise_graph_data, setSelectedPondDeviceData] = useState();
  const [pond_device_data, setPondDeviceData] = useState();

  useEffect(() => {
    // console.log(device_data_ref.current)
  }, [searchText]);
  const [message, setMessage] = useState();
  const send_instruction = () => {
    API.post("assets/send/message/", {
      message: message,
      asset_id: selected_pond.id,
    })
      .then((res) => {
        console.log(res.data);
        closeForm();
        dispatch(
          fetchPortableGenerators({ user_id: sessionStorage.getItem(USER_ID) })
        );
        enqueueSnackbar("Successfully sent!", { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar("Something went wrong", { variant: "warning" });
      });
  };
  const show_device_data = (pond, type) => {
    API.get("devices/list/with/data/")
      .then((res) => {
        console.log("device data API res", res.data);
        if (res.data.data.length > 0) {
        } else {
          enqueueSnackbar("This asset has no device", { variant: "warning" });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Something went wrong!", { variant: "warning" });
      });
  };
  const show_device_data_new = (pond, type) => {
    API.get("devices/individula/sensor/data/" + pond.id + "?type=" + type)
      .then((res) => {
        console.log("device data API res", res.data);
        if (res.data.data) {
          // window.scrollTo({ behavior: 'smooth', top: device_data_ref.current.offsetTop })
          setSelectedPond(pond);
          setChartDataType(type);
          setPondDeviceData(res.data.data);
          setSelectedPondDeviceData(generate_graph_data_new(res.data.data));
        } else {
          enqueueSnackbar("This asset has no device", { variant: "warning" });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Something went wrong!", { variant: "warning" });
      });
  };

  const show_pond_device_data = (pond) => {
    if (selected_pond?.id == pond.id) {
      setSelectedPond(null);
      setSelectedPondDeviceData(null);
      setPondDeviceData(null);
    } else {
      show_device_data_new(pond, "daily");
    }
  };
  const show_generators_data = (type) => {
    setSelectedOption(type);
    switch (type) {
      case "Today":
        dispatch(fetchPortableGenerators("daily"));
        break;

      case "This Week":
        dispatch(fetchPortableGenerators("weekly"));
        break;

      case "This Month":
        dispatch(fetchPortableGenerators("monthly"));
        break;
    }
  };

  const options = {
    margin: 6,
    responsiveClass: true,
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      769: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1025: {
        items: 3,
      },
      1224: {
        items: 3,
      },
      1600: {
        items: 4,
      },
    },
  };
  React.useEffect(() => {
    if (location.state?.from == "login") {
      enqueueSnackbar("Welcome ", { variant: "success" });
    }
    // dispatch(fetchPortableGenerators('daily'))
  }, []);
  return (
    <>
      {/**MODAl FOR SHOWING REAL TIME DATA */}
      <Modal isOpen={showTaskForm} size="md" className="p-2">
        <ModalHeader className="custom-modal-header">
          <span style={{ color: "white" }}>Send Instruction</span>
        </ModalHeader>
        <ModalBody className="custom-modal-design">
          <Form>
            <FormGroup>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="textarea"
                className="modal-custom-input"
                placeholder="Type here..."
              />
            </FormGroup>
          </Form>
          <div className="moadl-button-holder">
            <Button
              className="cancel-button-modal"
              size="sm"
              onClick={() => closeForm()}
            >
              cancel
            </Button>
            <Button
              size="sm"
              type="button"
              onClick={send_instruction}
              className="okay-button-modal"
            >
              send
            </Button>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          
        </ModalFooter> */}
      </Modal>
      {/**modal ends */}

      <div className="content">
        <Row>
          {/*______CARD FOR VIEWING DATA IN TABLE______ */}
          <Col lg="12" md="12">
            <Card className="table-holder-class">
              <CardHeader>
                {/* <CardTitle tag="h4">Simple Table</CardTitle> */}
              </CardHeader>
              <CardBody>
                
                {/* <BasicMenu/> */}
                <Dropdown
                  isOpen={isOpen}
                  toggle={toggleDropDown}
                  className="pull-right mr-1"
                  size="sm"
                >
                  <DropdownToggle>
                    <i class="fa fa-calendar mr-2"></i>
                    {selected_option} <i className="fas fa-caret-down"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    {table_view_options.map((item, idx) => (
                      <DropdownItem
                        key={idx}
                        onClick={() => show_generators_data(item)}
                        style={{ color: "black" }}
                      >
                        {item}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <div className="greet">
                  <p>
                    Hello Martin,
                    <br />
                    Welcome Back!
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="offset-md-3">
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup>
                <Button className="btn-fill" color="primary" type="button">
                  Opening the door <br /> nth times
                </Button>

                <Button className="btn-fill" color="secondary" type="button">
                  {" "}
                  Crossing the barrier
                  <br /> nth times{" "}
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>

        {/* <ButtonGroup aria-label="Basic example">

            <Button variant="secondary">A</Button>
            <Button variant="secondary">B</Button>
            <Button variant="secondary">C</Button>
            <Button variant="secondary">A</Button>
            <Button variant="secondary">B</Button>
            <Button variant="secondary">B</Button>
            
        </ButtonGroup> */}

        <p>Front Door</p>
        <Row>
          <Col md="7" style={{ width: "100%" }} className="py-2 rounded ">
            <video width="100%" height="100%"  controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="5">
            <Row style={{ width: "262px" }} className="py-2 m-2 rounded">
              <Col
                md="12"
                //style={{ width: "262px" }}
                className="py-2 m-2  rounded"
              >
                <video width="100%" controls>
                  <source src="movie.mp4" type="video/mp4"></source>
                  <source src="movie.ogg" type="video/ogg"></source>
                  Your browser does not support the video tag.
                </video>
              </Col>
              <Col
                md="12"
                //style={{ width: "262px" }}
                className="py-2 m-2 rounded"
              >
                <video width="100%" controls>
                  <source src="movie.mp4" type="video/mp4"></source>
                  <source src="movie.ogg" type="video/ogg"></source>
                  Your browser does not support the video tag.
                </video>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <p>Back Door</p>
        <Row>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="py-2 m-2 rounded col-4"
          >
           
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2 rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2 rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
        
        <p>Reception</p>
        <Row>
          <Col
            md="4"
           // style={{ width: "262px" }}
            className="py-2 m-2 rounded col-4"
          >
            
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2  rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2 rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
        
        <p>Inventory</p>
        <Row>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="py-2 m-2  rounded col-4"
          >
            
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2 rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2 rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>


        <p>Meeting Room</p>
        <Row>
          <Col
            md="4"
            style={{ width: "262px" }}
            className="py-2 m-2  rounded col-4"
          >
           
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2 rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md="3" className="py-2 m-2 rounded">
            <video width="100%" height="100%" controls>
              <source src="movie.mp4" type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
        
        <Row className="mt-6">
          <Col >
          {/**SERACH FIELD */}
          <SearchField
                  className="table-search"
                  placeholder="Search"
                  size="xm"
                 
                  onChange={onChange}
                />
          </Col>
          <Col>
          <Dropdown isOpen={isOpen1} toggle={toggleDropDown1}  size="sm">
                    <DropdownToggle>{dropdown_time} <i class="fas fa-caret-down"></i></DropdownToggle>
                   
                    <DropdownMenu>
                    {time_view_options.map((item, idx) => (
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
          <Col >
          <Dropdown isOpen={isOpen2} toggle={toggleDropDown2} background= "transparent" size="sm">
                    <DropdownToggle>{locations} <i class="fas fa-caret-down"></i></DropdownToggle>
                    <DropdownMenu>
                    {location_view_options.map((item, idx) => (
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
          <Col >
          <Dropdown isOpen={isOpen3} toggle={toggleDropDown3}  size="sm">
           <DropdownToggle>{camera} <i class="fas fa-caret-down"></i></DropdownToggle>
                    <DropdownMenu>
                    {camera_view_options.map((item, idx) => (
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
          <Col  >
          <Dropdown isOpen={isOpen4} toggle={toggleDropDown4} className="p-1" size="sm">
             <DropdownToggle>{insight} <i class="fas fa-caret-down"></i></DropdownToggle>
                    <DropdownMenu>
                    {insight_view_options.map((item, idx) => (
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
          <Col>
          <Col>
              <Button>Download</Button>
              
            </Col>
          </Col>
        </Row>

        {/*code for table */}
        <div className="content">
          <Row>
            <Col md="9">
              <Card className="card-plain">
                <CardHeader></CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Time</th>
                        <th>Place</th>
                        <th>Camera</th>
                        <th>Events</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td>$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td>$56,142</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
            
              <img src="live.png" width="100%" height="100%"></img>
              
              </Col>
           
            
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
