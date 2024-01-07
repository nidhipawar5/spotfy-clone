import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import { getTokenFromResponse } from "./spotify";
import { useDataLayerValue } from './DataLayer'

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img 
        className='sidebar_logo' 
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' 
        alt='' 
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />

      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}

    </div>
  )
}

export default Sidebar