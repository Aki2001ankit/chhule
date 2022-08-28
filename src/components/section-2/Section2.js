import React, { useState } from "react";
import Item from "./Item";
import Imagesection from "./imagesection";
import Carousel from "react-elastic-carousel";
import RouteData from "./differentroutedata";
import './section2.css'
import Card from './card'
const Section2 = (props) => {
  let [imageindex, setimageindex] = useState(0);
  const image = RouteData[imageindex];
 
  const Ncard =(val)=>{
    return(
      <Card
        label={val.label}
        route={val.route}
        details={val.details}
      />
    )
  }
  return (
    <div className="row">
      <Imagesection imgurl={image.imgPath} title={image.label} />

      <div className="col-12 col-md-5 m-auto pt-5 ">
      <h1 className="text-center">hello</h1>
        <Carousel
          className="mb-5"
          pagination={true}
          onNextStart={(currentItem, nextItem) => {
            
            setimageindex(imageindex + 1);
           
          }}
          onPrevStart={(currentItem, nextItem) => {
            setimageindex(imageindex - 1);
      
          }}
        >
        
         
         {RouteData.map(Ncard)}
          
        </Carousel>
      </div>
    </div>
    // <Box display="flex" className={classes.Section2}>
    //   <div className={classes.tripImages}>
    //     <p className={classes.placeName}> {images[activeStep].label} </p>{" "}
    //     <img src={images[activeStep].imgPath} className={classes.ImageTrip} />{" "}
    //   </div>{" "}
    //   <div className={classes.tripCarousel}>
    //     <div className={classes.title}>
    //       {" "}
    //       <Typography className={classes.exploreTitle}>
    //         {" "}
    //         Explore Incredible India!{" "}
    //       </Typography>
    //     </div>
    //     <div className={classes.trip}>
    //       <IconButton
    //         disableFocusRipple
    //         disableRipple
    //         onClick={handleBack}
    //         disabled={activeStep === 0}
    //         className={classes.btnArrow}
    //       >
    //         <KeyboardArrowLeft style={{ fontSize: "2rem" }} />{" "}
    //       </IconButton>{" "}
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           width: "90%",
    //         }}
    //       >
    //         <SwipeableViews
    //           index={activeStep}
    //           onChangeIndex={handleStepChange}
    //           enableMouseEvents
    //           className={classes.tripCard}
    //         >
    //           {images.map((step, index) => (
    //             <div key={step.label}>
    //               <Box className={classes.tripBox}>
    //                 <img src={busIcon} />{" "}
    //                 <Typography
    //                   style={{
    //                     fontWeight: "600",
    //                     fontFamily: "Roboto",
    //                     textTransform: "uppercase",
    //                     margin: "2% 0",
    //                     fontSize: "1.2rem",
    //                   }}
    //                 >
    //                   {" "}
    //                   {step.label}{" "}
    //                 </Typography>{" "}
    //                 <Typography
    //                   style={{
    //                     fontWeight: "400",
    //                     fontFamily: "Roboto",
    //                     margin: "4% 0",
    //                   }}
    //                 >
    //                   {" "}
    //                   {step.route}{" "}
    //                 </Typography>{" "}
    //                 <Typography className={classes.tripDetails}>
    //                   {" "}
    //                   {step.details}{" "}
    //                 </Typography>{" "}
    //                 <div className={classes.cta}>
    //                   <button className={classes.btnDetails}>
    //                     {" "}
    //                     <Typography
    //                       style={{ color: "black" }}
    //                       className={classes.btnText}
    //                     >
    //                       {" "}
    //                       VIEW DETAILS{" "}
    //                     </Typography>
    //                   </button>
    //                   <button className={classes.btnBook}>
    //                     <Typography className={classes.btnText}>
    //                       BOOK NOW!
    //                     </Typography>{" "}
    //                   </button>{" "}
    //                 </div>{" "}
    //               </Box>{" "}
    //             </div>
    //           ))}{" "}
    //         </SwipeableViews>{" "}
    //         <MobileStepper
    //           steps={maxSteps}
    //           position="static"
    //           activeStep={activeStep}
    //         />{" "}
    //       </div>{" "}
    //       <IconButton
    //         disableFocusRipple
    //         disableRipple
    //         onClick={handleNext}
    //         disabled={activeStep === maxSteps - 1}
    //         className={classes.btnArrow}
    //       >
    //         <KeyboardArrowRight style={{ fontSize: "2rem" }} />{" "}
    //       </IconButton>{" "}
    //     </div>{" "}
    //   </div>{" "}
    // </Box>
  );
};

export default Section2;
