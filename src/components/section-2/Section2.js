import React,{useState} from 'react';
import {Box,Typography,MobileStepper,IconButton} from "@material-ui/core";
import { KeyboardArrowLeft } from '@material-ui/icons';
import { KeyboardArrowRight } from '@material-ui/icons';
import {useTheme} from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Trip_Place1 from '../../assets/images/Trip_Place1.png';
import busIcon from '../../assets/icons/bus2-removebg-preview 1.svg';
import useStyles from './styles';

const Section2=props=>{

    const images = [
        {
          label: 'Roorkee, Uttarakhand',
          route:'R->M->C->R',
          imgPath:Trip_Place1,
          details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat nunc. Mauris in ante suscipit, rhoncus quam semper, sagittis lorem. Fusce varius mattis nisi sit amet cursus. Aliquam fringilla cursus dignissim.'
        },
        {
          label: 'Dehradun',
          route:'R->M->C->R',
          imgPath:Trip_Place1,
          details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat nunc. Mauris in ante suscipit, rhoncus quam semper, sagittis lorem. Fusce varius mattis nisi sit amet cursus. Aliquam fringilla cursus dignissim.'
        },
        {
          label: 'Haridwar',
          route:'R->M->C->R',
          imgPath:Trip_Place1,
          details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat nunc. Mauris in ante suscipit, rhoncus quam semper, sagittis lorem. Fusce varius mattis nisi sit amet cursus. Aliquam fringilla cursus dignissim.'
        },
        {
          label: 'Rishikesh',
          route:'R->M->C->R',
          imgPath:Trip_Place1,
          details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a feugiat nunc. Mauris in ante suscipit, rhoncus quam semper, sagittis lorem. Fusce varius mattis nisi sit amet cursus. Aliquam fringilla cursus dignissim.'
        },
      ];

    const classes=useStyles();

    const theme = useTheme();
    const [activeStep, setActiveStep] =useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
    setActiveStep(step);
    };


    return(
        <Box display='flex' className={classes.Section2}>
            <div className={classes.tripImages}>
                <p className={classes.placeName}>{images[activeStep].label}</p>
                <img src={images[activeStep].imgPath} className={classes.ImageTrip}/>
            </div>
            <div className={classes.tripCarousel}>
                <div className={classes.title}><Typography className={classes.exploreTitle}>Explore Incredible India!</Typography></div>
                <div className={classes.trip}>
                <IconButton
                disableFocusRipple
                disableRipple
                onClick={handleBack}
                disabled={activeStep === 0}
                className={classes.btnArrow}
                >
                <KeyboardArrowLeft style={{fontSize:'2rem'}}/>
                </IconButton>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'80%'}}>
                <SwipeableViews               
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                className={classes.tripCard}
                >
                    {images.map((step,index)=>(
                        <div key={step.label}>                           
                            <Box className={classes.tripBox}>
                                    <img src={busIcon} />                               
                                    <Typography style={{fontWeight:'600',fontFamily:'Roboto',textTransform:'uppercase',margin:'2% 0',fontSize:'1.2rem'}}>{step.label}</Typography>
                                    <Typography style={{fontWeight:'400',fontFamily:'Roboto',margin:'4% 0'}}>{step.route}</Typography>
                                    <Typography className={classes.tripDetails}>{step.details}</Typography>
                                    <div className={classes.cta}>
                                    <button className={classes.btnDetails} ><Typography style={{color:'black'}}className={classes.btnText}>VIEW DETAILS</Typography></button>
                                    <button className={classes.btnBook} >
                                      <Typography className={classes.btnText}>
                                        BOOK NOW!
                                      </Typography>
                                    </button> 
                                    </div>                              
                            </Box>
                        </div>
                    ))}
                </SwipeableViews>
                <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                /> 
                </div>
                <IconButton
                disableFocusRipple
                disableRipple
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                className={classes.btnArrow}
                >
                <KeyboardArrowRight style={{fontSize:'2rem'}}/>
                </IconButton>
                </div>
            </div>
        </Box>
    )
}

export default Section2;