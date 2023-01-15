import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ListSubheader from '@mui/material/ListSubheader';
import CourseDetailsPopout from "../CourseDetailsPopout/CourseDetailsPopout";
export default function Results() {
  return (
    <div className='Recommended-courses'>
    <List
      sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
      aria-label="contacts"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Search results
        </ListSubheader>
      }
    >
      <ListItem disablePadding>
        <CourseDetailsPopout/>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <DownloadOutlinedIcon />
          </ListItemIcon>
          <ListItemText  primary="Coding for Beginners 1" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <DownloadOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Coding for Beginners 2" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <DownloadOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="UI/UX Design Specialization" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>
            <DownloadOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Cloud computing course" />
        </ListItemButton>
      </ListItem>
    </List>
    </div>
  );
}