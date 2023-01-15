import "./styles.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function News() {
    return (
        <div className="News">
            <Card style={{backgroundColor:'#b1d9fc'}}>
            <CardHeader
                title="News"
            />
            <CardContent>
                <div>
            <Card sx={{ maxWidth: 450 }}>
                <CardHeader
                    avatar={
                        <Avatar variant="rounded" src={require('./avatars/avatar5.jpg')} sx={{ width: 40, height: 40 }}/>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Ernest Orr"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Ernest added a course - Introduction to programming: Haskell
                    </Typography>
                </CardContent>
                </Card>
                </div>
                <div className="News-second-card">
                <Card sx={{ maxWidth: 450 }}>
                <CardHeader
                    avatar={
                        <Avatar variant="rounded" src={require('./avatars/avatar6.jpg')} sx={{ width: 40, height: 40 }}/>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Nicolas Phillips"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Nicolas added a course - Spring Boot: part 2
                    </Typography>
                </CardContent>
                </Card>
                </div>
                </CardContent>
            </Card>
            
        </div>
    )
}