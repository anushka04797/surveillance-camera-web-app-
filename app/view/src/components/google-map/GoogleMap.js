import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component, useState } from 'react'
// import {API} from '../../Config'
export const MapContainer = (props) => {
    const [markers,setMarkers]=useState([])
    const onMarkerClick = () => {

    }
    const onInfoWindowClose = () => {

    }
    React.useEffect(()=>{
        // API.get('agentlocation').then((res)=>{
        //     console.log(res.data)
        //     setMarkers(res.data.data)
        // })
    },[])
    return (
        <>
            <div style={{overflowY:'hidden'}}>
                <Map google={props.google} zoom={14} initialCenter={{
                    lat: 23.8103,
                    lng: 90.4124
                }}>
                    <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 23.8103, lng: 90.4124}} />
                    <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 23.8103, lng: 90.4122}} />
                    <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{lat: 23.8103, lng: 90.4121}} />
                </Map>
            </div>
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAChn6tArJ-qTOKRZ1xhK0P9cumPrOjVfQ')
})(MapContainer)