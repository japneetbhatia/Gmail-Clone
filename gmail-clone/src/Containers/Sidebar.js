import React from 'react'
import './Sidebar.css'
import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from '../Containers/Sidebar'
import InboxIcon from '@mui/icons-material/Inbox';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose" >Compose</Button>
        <SidebarOption Icon={InboxIcon} title="inbox" number={54}/>
        </div>
    )
}

export default Sidebar
