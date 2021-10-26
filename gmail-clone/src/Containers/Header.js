import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className="header">
            {/* <h2>This is a header</h2>             */}
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
            </div>
            <div className="header__middle"></div>
            <div className="header__right"></div>
        </div>
    )
}

export default Header
