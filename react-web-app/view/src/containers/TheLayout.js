import React from 'react'
import { useDispatch } from 'react-redux';
import { USER_ID } from '../Config';
import { fetchPersonalDetails } from '../store/slices/ProfileSlice';
import { fetchProjectsThunk } from '../store/slices/ProjectsSlice';
import { fetchWbsThunk } from '../store/slices/WbsSlice';
import { fetchProjectsForPMThunk } from '../store/slices/ProjectsSlice';
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import './TheLayout.css'
import { has_permission } from '../helper';
import { fetchEvmsThunk } from '../store/slices/EvmsSlice';
import { fetchMeetingList } from '../store/slices/MeetingSlice';
import { fetchAllTimecardsPm, fetchAllTimecardsPmThunk, fetchTimecardThunk } from '../store/slices/TimecardSlice';
const TheLayout = () => {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    
  },[])
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body pt-10 custom-color-c-app">
          <TheContent/>
        </div>
        {/* <TheFooter/> */}
      </div>
    </div>
  )
}

export default TheLayout