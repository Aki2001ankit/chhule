import { makeStyles } from '@material-ui/core'

const useStyles=makeStyles(theme=>({
 tripImages:{
     position:'relative',
     width:'60%',
     height:'100%',
     backgroundColor:'#7e53c8'
 },
 ImageTrip:{
    width:'100%',
    height:'100%'
 },
 placeName:{
     position:'absolute',
     top:'50%',
     left:'50%',
     transform:'translate(-50%,-50%)',
     color:'#FFFFFF',
     fontWeight:'500',
     fontFamily:'Roboto',
     textTransform:'uppercase',
     fontSize:'1.5rem'
 },
 tripCarousel:{
     width:'40%',
     padding:'2rem',
     display:'flex',
     flexDirection:'column',
     alignItems:'center'
 },
 title:{
     width:'60%',
     textAlign:'center'
 }, 
 trip:{
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     width:'75%'
 },
 exploreTitle:{
     fontWeight:'500',
     fontFamily:'Roboto',
     fontSize:'2rem',
     textTransform:'uppercase',
 },
 tripCard:{
     width:'100%',
     textAlign:'center',
     border:'1px solid black',
     borderRadius:'15px',
     marginTop:'4%'
 },
 btnBook:{
     backgroundColor:'#7E53C8',
     borderRadius:'1rem',
     width:'100%',
     padding:'0.7rem',
     cursor:'pointer',
     margin:'6% 0 2% 0',
     border:'none'
 },
 
}))

export default useStyles;