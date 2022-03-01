import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'

import './App.css';

import { PALETTE_MODE } from './Config';
import "react-datetime/css/react-datetime.css";
import { getBuildDate } from "./helper";
import withClearCache from "./ClearCache";

const ClearCacheComponent = withClearCache();



// Pages

const App = () => {
  const logOut = () => {
    console.log('logging out')
    //dispatch(logout());
  };
  return (
    <>
    <ClearCacheComponent />;
    
    </>
  )
}
export default App;
