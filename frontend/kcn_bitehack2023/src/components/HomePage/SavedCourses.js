import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ListSubheader from '@mui/material/ListSubheader';

export default function SavedCourses() {
  return (
    <div className='Saved-courses'>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Saved courses
        </ListSubheader>
      }
    >
    <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Roman" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Roman" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Roman" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Roman" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Roman" />
        </ListItemButton>
      </ListItem>
    </List>
    </div>
  );
}