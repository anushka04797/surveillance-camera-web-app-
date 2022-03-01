import React, { useEffect, useRef, useState } from "react";
import UpArrow from "../assets/icons/up-arrow.svg";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import SearchField from 'react-search-field';
import SafePondDot from '../assets/icons/safe-pond.svg'
import OfflineDot from '../assets/icons/offline.svg'
import calendar from '../assets/icons/Calendar.svg'
import PaperIcon from '../assets/icons/Paper.svg'
import RefreshIcon from '../assets/icons/refresh.svg'
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
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
  ModalFooter,ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,Dropdown,DropdownItem,DropdownToggle,DropdownMenu,ButtonDropdown

} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,

  chartExample4,
} from "variables/charts.js";
import "../../src/assets/css/Dashboard.css";
import '../index.css'
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { API } from "config";
import { generate_graph_data_new,generate_graph_data } from "helper";
import { useLocation } from 'react-router';
import { useSnackbar } from 'notistack';
import store from "store/store";
import {scroller} from 'react-scroll'
import OwnerUpdateModal from "components/OwnerUpdateModal/OwnerUpdateModal";
import { USER_ID } from "config";
import { fetchPortableGenerators } from "store/slices/portableGeneratorSlice";
import Map from "./Map";
import GoogleMap from "components/google-map/GoogleMap";
import AgentTrack from "components/google-map/Tracking";
import { MapContainer } from "../components/google-map/GoogleMap";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function Dashboard(props) {
  const graph_div_ref = useRef(null)
  const[searchText,setSearchText]=useState('')
  const [showPersonUpdate,setShowPersonUpdate]=useState(false)
  const executeScroll = () => graph_div_ref.current.scrollIntoView()
  // const executeScroll = () => scrollToRef(graph_div_ref)
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [chartDataType, setChartDataType] = React.useState("daily");
  const [selectedData,setSelectedData]=useState({data:'ph',options:'ph_options'})
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  let location = useLocation()
  const portable_generators = useSelector(state=>state.pg.data)
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  // const device_data_ref = React.forwardRef(null)
  {/**Code for writing table search */ }
  function onChange(value, event) {
    console.log(value,event)
    setSearchText(value)
  }
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [currentActiveTab, setCurrentActiveTab] = useState('1');
  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };
  const closeForm = () => {
    setShowTaskForm(false)
  }
  // Toggle active state for Tab
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }
  const[isOpen,setOpen]=useState(false)
  const toggleDropDown = () => {
    setOpen(!isOpen)
  }
  const [selected_pond,setSelectedPond]=useState()
  const table_view_options=['Today','This Week','This Month']
  const[selected_option,setSelectedOption]=useState('Today')
  const [selected_pond_wise_graph_data,setSelectedPondDeviceData]=useState()
  const [pond_device_data,setPondDeviceData]=useState()
  
  useEffect(()=>{
    // console.log(device_data_ref.current)
  },[searchText])
  const [message,setMessage]=useState()
  const send_instruction=()=>{
    API.post('assets/send/message/',{message:message,asset_id:selected_pond.id}).then((res)=>{
      console.log(res.data)
      closeForm()
      dispatch(fetchPortableGenerators({user_id:sessionStorage.getItem(USER_ID)}))
      enqueueSnackbar('Successfully sent!',{variant:'success'})
    }).catch(err=>{
      enqueueSnackbar('Something went wrong',{variant:'warning'})
    })
  }
  const show_device_data=(pond,type)=>{
    API.get('devices/list/with/data/').then((res)=>{
      console.log('device data API res',res.data)
      if(res.data.data.length>0){
        
      }
      else{
        enqueueSnackbar('This asset has no device',{variant:'warning'})
      }
    }).catch(err=>{
      console.log(err)
      enqueueSnackbar('Something went wrong!',{variant:'warning'})
    })
  }
  const show_device_data_new=(pond,type)=>{
    API.get('devices/individula/sensor/data/'+pond.id+'?type='+type).then((res)=>{
      console.log('device data API res',res.data)
      if(res.data.data){
        // window.scrollTo({ behavior: 'smooth', top: device_data_ref.current.offsetTop })
        setSelectedPond(pond)
        setChartDataType(type)
        setPondDeviceData(res.data.data)
        setSelectedPondDeviceData(generate_graph_data_new(res.data.data))
      }
      else{
        enqueueSnackbar('This asset has no device',{variant:'warning'})
      }
    }).catch(err=>{
      console.log(err)
      enqueueSnackbar('Something went wrong!',{variant:'warning'})
    })
  }
  
  const show_pond_device_data=(pond)=>{
    if(selected_pond?.id==pond.id){
      setSelectedPond(null)
      setSelectedPondDeviceData(null)
      setPondDeviceData(null)
    }
    else{
      show_device_data_new(pond,'daily')
    }
  }
  const show_generators_data=(type)=>{
    setSelectedOption(type)
    switch(type){
      case 'Today':
        dispatch(fetchPortableGenerators('daily'))
        break;
      
      case 'This Week':
        dispatch(fetchPortableGenerators('weekly'))
        break;

      case 'This Month':
        dispatch(fetchPortableGenerators('monthly'))
        break;
    }
    
  }
  
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
        items: 2
      },
      1025: {
        items: 3,
      },
      1224: {
        items: 3
      },
      1600: {
        items: 4
      }

    },
  }
  React.useEffect(()=>{
    if(location.state?.from == 'login'){
      enqueueSnackbar('Welcome ',{variant:'success'})
    }
    // dispatch(fetchPortableGenerators('daily'))
  },[])
  return (
    <>
      {/**MODAl FOR SHOWING REAL TIME DATA */}
      <Modal
        isOpen={showTaskForm}
        size='md'
        className="p-2"
      >
        <ModalHeader className="custom-modal-header">
          <span style={{color:'white'}}>Send Instruction</span>
        </ModalHeader>
        <ModalBody className="custom-modal-design" >
          <Form>
            <FormGroup>
              <Input value={message} onChange={(e)=>setMessage(e.target.value)} type="textarea" className="modal-custom-input" placeholder="Type here..." />
            </FormGroup>
          </Form>
          <div className="moadl-button-holder">
            <Button className="cancel-button-modal"size="sm"
              onClick={() => closeForm()}
            >
              cancel
            </Button>
            <Button size="sm" type="button" onClick={send_instruction} className="okay-button-modal">
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
                {/**SERACH FIELD */}
                <SearchField
                  className="table-search"
                  placeholder='Search'
                  size="sm"
                  onChange={onChange}
                />
                {/* <BasicMenu/> */}
                <Dropdown isOpen={isOpen} toggle={toggleDropDown} className="pull-right mr-1" size="sm">
                    <DropdownToggle><i class="fa fa-calendar mr-2"></i>{selected_option} <i className="fas fa-caret-down"></i></DropdownToggle>
                    <DropdownMenu>
                      {table_view_options.map((item,idx)=>(
                        <DropdownItem key={idx} onClick={()=>show_generators_data(item)} style={{color:'black'}}>{item}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                <Table className="tablesorter pond-details" responsive hover>
                  <thead className="text-primary">
                    <tr>
                      <th className="pond-value-pointer">Generator ID</th>
                      {/* <th className="pond-value-pointer">Person</th> */}
                      <th className="pond-value-pointer">Charging</th>
                      <th className="text-center pond-value-pointer">Discharging</th>
                      <th className="text-center pond-value-pointer">Consumption</th>
                      <th className="text-center pond-value-pointer">Run Time</th>
                      <th className="text-center pond-value-pointer">Health</th>
                      <th className="text-center pond-value-pointer">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portable_generators.map((item, idx) => (
                      <tr key={idx}>
                        <td className="pond-actual-value" title={item.owner_name+' '+item.phone}>{item.status=='Offline'?<img src={OfflineDot} className="name-dot" />:<img src={SafePondDot} className="name-dot" />} {item.device_id}</td>
                        {/* <td className="pond-actual-value" title={pond.phone}>{pond.owner_name}</td> */}
                        <td className="pond-actual-value">{item.charging}</td>
                        <td className="text-center pond-actual-value">{item.discharging}</td>
                        <td className="text-center pond-actual-value">{item.consumption} L</td>
                        <td className="text-center pond-actual-value">{item.runtime}</td>
                        <td className="text-center pond-actual-value">{item.Health} %</td>
                        <th className="text-center pond-actual-value">
                        <ButtonToolbar aria-label="Toolbar with button groups">
                          <ButtonGroup aria-label="Third group" className="m-auto" size="sm">
                            <ButtonToggle onClick={()=>show_pond_device_data(item)} type="button">Detail</ButtonToggle>
                            {/* <ButtonToggle type="button" onClick={()=>{setShowPersonUpdate(true);setSelectedPond(item);}}>Manage Person</ButtonToggle> */}
                          </ButtonGroup>
                        </ButtonToolbar>
                        </th>
                        
                        {/* <th className="text-center pond-actual-value">
                          <ButtonToggle type="button" onClick={()=>show_pond_device_data(pond)} className="table-view-button">{selected_pond?.id==pond.id?'Hide':'Detail'}</ButtonToggle>
                        </th> */}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        {/* <GoogleMap/> */}
        <Col xs="10" sm="10" lg="10" className="offset-md-1">
          <AgentTrack/>
          {/* <MapContainer/> */}
        </Col>
          
        </Row>
        {selected_pond_wise_graph_data!=undefined && <Row id="graph_row" className="graph_row">
          {/***_________CARDS FOR DISPLAYING CHARTS________ */}
          <Col xs="12" sm="12" lg="12">
            <Card className="card-chart card-chart-custom">
              {/* <Button onClick={() => { setShowTaskForm(true) }} type="button" className="ml-auto comment-button"><img src={PaperIcon} className="img-fluid paper-icon" /></Button> */}
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6" lg="6">
                    <h6 className="pond-name">
                      {/* <img src={SafePondDot} className="name-dot" /> */}
                      <span className="pond-show-safe">
                        {/* <span style={{fontSize:'14px'}}>(On)</span> */}
                        {selected_pond.name}</span>
                    </h6>
                  </Col>
                  <Col className="text-right" sm="6" lg="6">
                  <Button onClick={() => { setShowTaskForm(true) }} type="button" className="ml-auto comment-button"><img src={PaperIcon} className="img-fluid paper-icon" /></Button>
                  </Col>
                </Row>
                <Row>
                  {/**________POND NAME VIEW ______ */}
                  
                  {/**__REALTIME UPDATE BUTTON____ */}
                  {/* <Col sm="6" lg="6" className="text-center" >
                    <Button className="refresh-button"><img src={RefreshIcon} className="refresh-btn-icon" />Real-time Update</Button>
                  </Col> */}
                  {/**___POND PH VALUE______ */}
                  <Col sm="12" md="4" lg="4">
                    <div>
                      {/* <h6 className="PH-value">{Number(pond_device_data[0].ph[pond_device_data[0].ph.length-1]).toFixed(2)} &amp; {Number(pond_device_data[0].temp[pond_device_data[0].temp.length-1]).toFixed(2)}<br/>{pond_device_data[0].time[pond_device_data[0].time.length-1]}</h6> */}
                      <h6 className="temp-annonation">Pond {selectedData.data}</h6>
                      <h6 className="temp-annonation">{pond_device_data.PH[0].time[pond_device_data.PH[0].time.length-1]}</h6>
                    </div>

                  </Col>
                  {/**___BUTTON GROUP FOR FILTERING CHART VALUE OVER TIME____ */}
                  <Col sm="12" md="4" lg="8" className="text-right">
                    <ButtonGroup className="btn-group-toggle mt-2 button-group-graph" data-toggle="buttons" >
                      {/*__1DAY__ */}
                      <Button tag="label" className={classNames("btn-simple", { active: chartDataType === "daily", })} id="0" size="sm" onClick={() => show_device_data_new(selected_pond,"daily")} >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">1D</span>
                        <span className="d-block d-sm-none"><i className="tim-icons icon-single-02" /></span>
                      </Button>
                      {/*___1W___*/}
                      <Button id="1" size="sm" tag="label" className={classNames("btn-simple", {active: chartDataType === "weekly",})} onClick={() => show_device_data_new(selected_pond,"weekly")} >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">1W</span>
                        <span className="d-block d-sm-none"><i className="tim-icons icon-gift-2"/></span>
                      </Button>
                      {/*__1M__*/}
                      <Button id="2" size="sm" tag="label" className={classNames("btn-simple", {active: chartDataType === "monthly",})} onClick={() => show_device_data_new(selected_pond,"monthly")}>
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">1M</span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                      {/*__6 MONTHS__ */}
                      <Button id="3" size="sm" tag="label"
                        className={classNames("btn-simple", {
                          active: chartDataType === "half-yearly",
                        })}
                        onClick={() => show_device_data_new(selected_pond,"half-yearly")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          6M
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                      {/*__1 YEAR__ */}
                      <Button

                        id="4"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: chartDataType === "yearly",
                        })}
                        onClick={() => show_device_data_new(selected_pond,"yearly")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          1Y
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                      {/*__5 YEARS__ */}
                      <Button
                        id="5"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: chartDataType === "5-yearly",
                        })}
                        onClick={() => setBgChartData("data6")}
                        disabled={true}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          5Y
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area mb-3">
                  <Line
                    data={selected_pond_wise_graph_data[selectedData.data]}
                    options={selected_pond_wise_graph_data[selectedData.options]}
                  />
                </div>
              </CardBody>
              <div className="tab-holder">
                {/*tab group for showing ph,temp,turb*/}
                <Nav tabs className="tab-nav-info">
                  {/*PH & Temp*/}
                  <NavItem>
                    <NavLink
                      className={classNames("tab-ph", {
                        active:
                          currentActiveTab === '1'
                      })}
                      onClick={() => { toggle('1'); setSelectedData({data:'ph',options:'ph_options'}) }}
                    >
                      pH
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames("tab-turbidity", {
                        active:
                          currentActiveTab === '2'
                      })}
                      onClick={() => { toggle('2'); setSelectedData({data:'temp',options:'temp_options'}) }}
                    >
                      Temp
                    </NavLink>
                  </NavItem>
                  {/*TURBIDITY*/}
                  {/* <NavItem>
                    <NavLink
                      className={classNames("tab-turbidity", {
                        active:
                          currentActiveTab === '2'
                      })}
                      onClick={() => { toggle('2'); }}
                    >
                      Turbidity
                    </NavLink>
                  </NavItem> */}
                  {/*TDS*/}
                  <NavItem>
                    <NavLink
                      className={classNames("tab-tds", {
                        active:
                          currentActiveTab === '3'
                      })}
                      onClick={() => { toggle('3'); setSelectedData({data:'tds',options:'tds_options'})}}
                    >
                      TDS
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Card>
            {/**Show tab conttent */}
            <TabContent activeTab={currentActiveTab}>
              {/**__TAB 1 CONTENT */}
              <TabPane tabId="1">
                <Row>
                  <Col sm="12" md="6" lg="6" xl="5">

                    <Table className="leftside-values" borderless>
                      <tbody>
                        <tr className="add-one-border">
                          <th scope="row" className="ph-value-number">
                            pH 4.0 - 6.0
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                        {/**2nd row to left */}
                        <tr className="add-one-border">
                          <th scope="row" className="ph-value-number">
                            pH 6.0 - 9.0
                          </th>
                          <td className="ph-text good-value-color">
                            Best for growth
                          </td>
                        </tr>
                        {/**3rd row to left */}
                        <tr className="add-one-border">
                          <th scope="row" className="ph-value-number">
                            pH 9.0 - 11.0
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                  </Col>
                  {/* <Col sm="12" md="6" lg="6" xl="5">
                    <Table className="rightside-values" borderless>
                      <tbody>
                        <tr>
                          <th scope="row" className="ph-value-number">
                            pH 4.0 - 6.0
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                        
                        <tr>
                          <th scope="row" className="ph-value-number">
                            pH 6.0 - 9.0
                          </th>
                          <td className="good-value-colour">
                            Best for growth
                          </td>
                        </tr>
                        
                        <tr>
                          <th scope="row" className="ph-value-number">
                            pH 9.0 - 11.0
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col> */}
                </Row>
              </TabPane>
              {/**__TAB 2 CONTENT */}
              <TabPane tabId="2">
                <Row>
                  <Col sm="12" md="6" lg="8" xl="5">
                    {/* <Table className="rightside-values" borderless>
                      <tbody>
                        <tr>
                          <th scope="row" className="ph-value-number">
                            &lt; 5 NTU
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                        
                        <tr>
                          <th scope="row" className="ph-value-number">
                            5-10 NTU
                          </th>
                          <td className="good-value-colour">
                            Best for growth
                          </td>
                        </tr>
                        
                        <tr>
                          <th scope="row" className="ph-value-number">
                            &gt; 10 NTU
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                      </tbody>
                    </Table> */}
                  </Col>
                  <Col sm="12" md="6" lg="8" xl="7">

                  </Col>
                </Row>
              </TabPane>
              {/**__TAB 3 CONTENT */}
              <TabPane tabId="3">
                <Row>
                  <Col sm="12" md="6" lg="8" xl="5">
                    <Table className="rightside-values" borderless>
                      <tbody>
                        <tr>
                          <th scope="row" className="ph-value-number">
                            &lt;100 mg/L
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                        {/**2nd row to left */}
                        <tr>
                          <th scope="row" className="ph-value-number">
                            160-200 mg/L
                          </th>
                          <td className="good-value-colour">
                            Best for growth
                          </td>
                        </tr>
                        {/**3rd row to left */}
                        <tr>
                          <th scope="row" className="ph-value-number">
                            &gt; 250 mg/L
                          </th>
                          <td className="ph-text">
                            Slow growth rate
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>

                </Row>
              </TabPane>
            </TabContent>
          </Col>
          {/* <Col xs="12" sm="12" lg="4" style={{height:'85vh',overflowY:'auto',scrollBehavior: 'smooth'}}>
            <Row>
              {Array.from(selected_pond_wise_graph_data.slice(1,selected_pond_wise_graph_data.length)).map((item,idx)=>(
                <Col xs="12" key={idx}>
                <Card className="card-chart small-card-chart">
                  <CardHeader className="pond-name-ellipse">
                    <h6 className="other-pond-name-small"><img src={SafePondDot} className="name-dot" /><span className="pond-show-safe-small">{pond_device_data[idx+1].device_name}</span></h6>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      {is_data_available(pond_device_data[idx+1])?<Line
                        data={item[selectedData.data]}
                        options={item[selectedData.options]}
                      />:<h4 className="ml-3">No Data Available</h4>}
                    </div>
                  </CardBody>
                </Card>
              </Col>
              ))}
            </Row>
          </Col> */}
          
          <Col lg="12">
            <div className=" add-extra-top-margin">
              <OwlCarousel className='owl-theme' loop {...options}>
                <div className='item'>
                  <video className="ccda-video" controls>
                    <source src="https://www.pexels.com/video/water-plants-floating-on-the-surface-of-a-pond-3252151/" type="video/mp4" />
                  </video>

                </div>
                {/**REMOVE ONCE DYNMIC__DUMMY DIVS */}
                <div className='item'>
                  <video className="ccda-video" controls>
                    <source src="https://www.pexels.com/video/water-plants-floating-on-the-surface-of-a-pond-3252151/" type="video/mp4" />
                  </video>

                </div>
                <div className='item'>
                  <video className="ccda-video" controls>
                    <source src="https://www.pexels.com/video/water-plants-floating-on-the-surface-of-a-pond-3252151/" type="video/mp4" />
                  </video>

                </div>
                <div className='item'>
                  <video className="ccda-video" controls>
                    <source src="https://www.pexels.com/video/water-plants-floating-on-the-surface-of-a-pond-3252151/" type="video/mp4" />
                  </video>

                </div>

              </OwlCarousel>
            </div>
          </Col>
        </Row>}

      </div>



    </>
  );
}

export default Dashboard;
