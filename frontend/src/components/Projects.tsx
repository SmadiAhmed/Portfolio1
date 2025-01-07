import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import carsLogo from "../assets/homelogo.jpg"
import carswebiste from "../assets/carswebsite1.png"
import spotseekers from "../assets/logo.png"
import spotwebsite from "../assets/spotseekers1.png"
import Chip from '@mui/material/Chip';
import { blue, green, orange, red, purple, pink,cyan,grey } from '@mui/material/colors';
import {SiGithub} from "react-icons/si"
import {SiAirplayvideo} from "react-icons/si"


type Technology = 'JavaScript' | 'React' | 'MongoDB' | 'NodeJS' | 'ExpressJS' | 'MUI' | 'SocketIO' | 'PostgreSQL' | 'Redux'|'Vite';
const techColors:Record<Technology, string> = {
  JavaScript: blue[500],
  React: cyan[500],
  Vite:cyan[500],
  MongoDB: green[500],
  NodeJS: orange[500],
  ExpressJS: red[500],
  MUI: purple[500],
  SocketIO: pink[500],
  PostgreSQL: green[300],
  Redux: red[300],
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  


  const cards=[
    {logo:carsLogo ,title:'Elite Cars', date:'October 20, 2024', siteimage:carswebiste ,descrption:'Elite cars is a website that shows different categories of cars for sale , it allows the users to find the car that he wants and contact  the seller , as well as the user can post his own car for sale.' ,video:'https://drive.google.com/drive/folders/12IfhHR_SyMQTb7k9SM5RoBWKq6O1EzV_?dmr=1&ec=wgc-drive-globalnav-goto'
    ,code:'https://github.com/C12-SmadiAhmed/MERAKI_Academy_Project_4', technologyUsed:['JavaScript','React','MongoDB','NodeJS','ExpressJS','MUI','SocketIO']},

  {logo:spotseekers ,title:'Spot Seekers', date:'Decmber 1, 2024', siteimage:spotwebsite ,descrption:'Spot Seekers is a website that allows users to see famous tourist spots around the world, also they can reach the guides for every spot for any inquiry, as well as they can purchase souvenirs from that place.' ,video:'https://www.youtube.com/watch?v=UKl6UZQLYHg&t=7s'
    ,code:'https://github.com/Algorithm1Avengers/MERAKI_Academy_Project_5-', technologyUsed:['JavaScript','Vite','PostgreSQL','NodeJS','ExpressJS','MUI','SocketIO','Redux']

  }]



  return (
    <>
   <div className="flex justify-center items-center">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 mt-6 ">
    {cards.map((elem) => (
      <Card
        key={elem.title}
        className="w-full sm:max-w-sm lg:max-w-md transition-transform transform hover:scale-105 relative"
        sx={{
          boxShadow: 3,
          '&:hover': { boxShadow: 6 },
          transition: 'all 0.3s ease',
        }}
      >
        {/* Top-Right Icons */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 10,
            display: 'flex',
            gap: '8px',
          }}
        >
          <SiGithub
            onClick={() => {
              window.open(elem.code);
            }}
            size="30px"
            style={{ color: '#181717', cursor: 'pointer' }}
            title="GitHub Repository"
          />
          <SiAirplayvideo
            onClick={() => {
              window.open(elem.video);
            }}
            size="32px"
            style={{ color: '#000000', cursor: 'pointer' }}
            title="Project video"
          />
        </div>

        {/* Card Content */}
        <CardHeader
          avatar={
            <Avatar>
              <img
                src={elem.logo}
                alt="Car Logo"
                style={{ width: '100%', height: '100%' }}
              />
            </Avatar>
          }
          title={
            <Typography variant="h6" sx={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              {elem.title}
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {elem.date}
            </Typography>
          }
        />
        <CardMedia component="img" height="194" image={elem.siteimage} alt="Project Image" />
        <CardContent>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            {elem.descrption}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {elem.technologyUsed.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  backgroundColor: techColors[tech as Technology] || grey[500],
                  color: 'white',
                }}
              />
            ))}
          </div>
        </CardContent>
        <CardActions disableSpacing>
          
        </CardActions>
      </Card>
    ))}
  </div>
</div>
  </>
  );
}
