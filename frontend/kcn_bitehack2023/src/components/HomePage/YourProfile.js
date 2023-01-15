// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Stack from 'react-bootstrap/Stack';

// export default function YourProfile() {
//     return(
//         <div className="Your-profile">
//             <Card sx={{ maxWidth: 345 }}>
//             {/* <CardMedia
//                 sx={{ height: 140 }}
//                 image="/static/images/cards/contemplative-reptile.jpg"
//                 title="green iguana"
//             /> */}
//             <CardContent>
//                 <Typography gutterBottom variant="h6">
//                 <Avatar variant="rounded" src={require('./avatar1.jpg')} sx={{ width: 50, height: 50 }}/>
//                 Jan Kowalski
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//         </Card>
//         </div>
//     )
// }

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

export default function YourProfile() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <Avatar variant="rounded" src={require('./avatar1.jpg')} sx={{ width: 50, height: 50 }}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Przemysław Roman"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            <span role="img" aria-label="fire">🔥 31 days streak</span>
            <br/>
            <span role="img" aria-label="star">⭐</span>
             202 stars
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}