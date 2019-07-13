import React from 'react';

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = props => {
    return (
        <Drawer anchor='right' open={props.open} onClose={props.onClose}>
            <List component='nav'>
                <ListItem button onClick={() => console.log('feattured')}>
                    Event Starts In
                </ListItem>
                <ListItem button onClick={() => console.log('feattured')}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => console.log('feattured')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => console.log('feattured')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => console.log('feattured')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};



export default SideDrawer;