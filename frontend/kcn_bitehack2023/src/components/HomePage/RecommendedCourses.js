import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ListSubheader from '@mui/material/ListSubheader';

export default function RecommendedCourses() {
  return (
    <div className='Recommended-courses'>
    <List
    
      style={{backgroundColor:'#b1d9fc'}}
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper'}}
      aria-label="contacts"
      subheader={
        <ListSubheader style={{backgroundColor:'#e2ffad'}} component="div" id="nested-list-subheader">
          Recommended courses
        </ListSubheader>
      }
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Getting started with Docker" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText  primary="Introduction to the Theory of Relativity" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Linear Algebra: Basics " />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="How to start your journey with fishing" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="How to start with FPGA?" />
        </ListItemButton>
      </ListItem>
    </List>
    </div>
  );
}