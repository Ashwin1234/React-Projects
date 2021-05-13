import React from 'react'
import { List, ListItemText, ListItem, ListItemAvatar, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase'
function ToDo(props) {
    return (
        <div>
            <List>
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary={props.text.task} />
            
            </ListItem>
            <DeleteForeverIcon onClick={event=>db.collection('ToDo').doc(props.text.id).delete()}></DeleteForeverIcon>
            </List>
        </div>
    )
}

export default ToDo
