import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ListSubheader from '@mui/material/ListSubheader';
import { textAlign } from '@mui/system';

export default function SavedCourses() {
  return (
    <div className='Saved-courses'>
    <List
      style={{backgroundColor:'#b1d9fc'}}
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper'}}
      aria-label="contacts"
      subheader={
        <ListSubheader style={{backgroundColor:'#fff757'}} component="div" id="nested-list-subheader">
          Saved courses
        </ListSubheader>
      }
    >
    <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Intoduction to programming: Java" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Kubernetes: Introduction" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Intoduction to programming: Python" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Algorithms and Data Structures - Part 2" />
        </ListItemButton>
      </ListItem>
    </List>
    </div>
  );
}