import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useNavigate} from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CurrentCourse() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  function handleContinue(){
    navigate("/showCourse");
  }

  return (
    <div className='Current-course'>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'#b1d9fc'}}>
      <CardHeader
        title="Current course"
      />
      {/* <CardContent> */}
        {/* <Typography> */}
        <ListItem>
        {/* <ListItemIcon>
            <ModelTrainingIcon/>
        </ListItemIcon> */}
          <ListItemText primary="Intoduction to programming: Java" />
        </ListItem>
        <div className='Progress-bar'>
        <ProgressBar striped variant="success" animated now={60} label={"60%"}/>
        </div>
        {/* </Typography> */}
      {/* </CardContent> */}
      <CardActions disableSpacing>
        <div className='Continue-button'>
        <Button variant="contained" onClick={handleContinue}>Continue</Button>
        </div>
      </CardActions>
    </Card>
    </div>
  );
}