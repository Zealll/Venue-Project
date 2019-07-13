import React, { Component } from 'react';

import SideDrawer from './SideDrawer'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

class Header extends Component {
    state = {
        drawerOpen: false
    }

    toggleDrawer = () => {
        this.setState({
            drawerOpen: this.state.drawerOpen === false ? true : false 
        })
    }

    render() {
     
        return (
            <AppBar position='fixed' style={{background: '#2f2f2f', padding: '10px 0'}}>
                <ToolBar>
                    <div className='header_logo'>
                        <div className='font_righteous header_logo_venue'>The Venue</div>
                        <div className='header_logo_title'>Musical Events</div>
                    </div>
                    <IconButton aria-label='menu' color='inherit' onClick={this.toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    {/* Component */}
                    <SideDrawer open={this.state.drawerOpen} onClose={this.toggleDrawer}/>

                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;