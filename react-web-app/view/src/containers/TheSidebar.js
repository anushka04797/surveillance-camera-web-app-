import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './TheSidebar.css'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarMinimizer,
  CSidebarNavItem,
} from '@coreui/react'
import { changeState } from '../store/slices/SideBarSlice';
// sidebar nav config
import { useHistory } from 'react-router';
import { API } from '../Config'
const TheSidebar = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const show = useSelector(state => state.sidebar.sidebarShow)
  React.useEffect(() => {

  }, [])
  const logout = () => {
    API.get('auth/logout/').then((res) => {
      sessionStorage.clear()
      history.push('/')
    }).catch(err => {
      sessionStorage.clear()
      history.push('/')
    })

  }
  return (
    <CSidebar colorScheme="light"
      show={show}
      onShowChange={(val) => dispatch(changeState(val))}
    >
      <CSidebarBrand className="d-md-down-none custom-color" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        /> */}
        <span className="c-sidebar-brand-full name-brand1">Metal</span>

        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        <span className="c-sidebar-brand-minimized name-brand1">M</span>
      </CSidebarBrand>
      <CSidebarNav className="vo-sidebar">
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard" className="vo-navItem"></CSidebarNavItem>
        {/**Agent tracking */}
        <CSidebarNavItem to="/dashboard/agent-tracking" icon="cibOpenstreetmap" name="Track Agents" className="vo-navItem"></CSidebarNavItem>
        <CSidebarNavItem href='http://localhost:8000/add-task' icon="cil-library" name="Add Task" className="vo-navItem"></CSidebarNavItem>
        <hr />
        {/**Profile */}
        <CSidebarNavItem to="/dashboard/profile" name="Profile" icon="cil-user" className="vo-navItem"></CSidebarNavItem>


        {/**log out */}
        <CSidebarNavItem onClick={logout} name="Logout" icon="cil-account-logout" className="vo-navItem"></CSidebarNavItem>

      </CSidebarNav>
      {/* <span className="copyright-text">&copy; DMA V1.0.0</span> */}
      <CSidebarMinimizer />

    </CSidebar>
  )
}

export default React.memo(TheSidebar)
