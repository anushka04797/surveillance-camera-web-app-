import { configureStore } from '@reduxjs/toolkit'
import ConfigSlice from './slices/ConfigSlice'
import DrawerSlice from './slices/DrawerSlice'
import ProfileSlice from './slices/ProfileSlice'
import ProjectsSlice from './slices/ProjectsSlice'
import SidebarSlice from './slices/SideBarSlice'
import WbsSlice from './slices/WbsSlice'
import MeetingSlice from "./slices/MeetingSlice"
import EvmsSlice from './slices/EvmsSlice'
import TdoSlice from './slices/TdoSlice'
import TimecardSlice from './slices/TimecardSlice'
export default configureStore({
  reducer: {
    drawer: DrawerSlice,
    config: ConfigSlice,
    sidebar: SidebarSlice,
    projects: ProjectsSlice,
    wbs: WbsSlice,
    profile:ProfileSlice,
    meetings: MeetingSlice,
    evmsList:EvmsSlice,
    tdo : TdoSlice,
    timecardList:TimecardSlice

  },
})
