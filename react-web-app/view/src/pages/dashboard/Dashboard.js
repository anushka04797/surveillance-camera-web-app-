import React, { Suspense } from 'react';
import { CContainer } from '@coreui/react';
import './dashboard.css';

import { useLocation } from 'react-router';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Dashboard=()=> {
    let location = useLocation()
    const dispatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    React.useEffect(()=>{
        console.log('dashboard mounted')
        if(location.state?.from == 'login'){
            enqueueSnackbar('Welcome ',{variant:'success'})
        }
        //console.log(new Date(JSON.parse(sessionStorage.getItem('TOKEN')).time).toISOString())
    },[])
    return (
        <>
        <CContainer>
            {/**Row for showing da tables */}
            {/* <CRow>
                <div className="col-lg-5 offset-lg-1"><ProjectTables/></div>

                <div className="col-lg-5"><AssignedToMe/></div> 
                
                <div className="col-lg-5 offset-lg-1"><ScheduledMeetings/></div>
                {has_permission('evms.view_evms') &&
                <div className="col-lg-5 "><EvmsShow/></div>}
                
               
            

            </CRow> */}
        </CContainer>
        </>
    );
}

export default React.memo(Dashboard)
