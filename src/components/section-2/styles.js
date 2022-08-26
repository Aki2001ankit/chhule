import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    Section2: {
        width: '100vw',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            flexDirection: "row"
        },
    },
    tripImages: {
        position: 'relative',
        width: '60%',
        height: '100%',
        backgroundColor: '#7e53c8',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            order: '2'
        },
    },
    ImageTrip: {
        width: '100%',
        height: '100%'
    },
    placeName: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: '#FFFFFF',
        fontWeight: '500',
        fontFamily: 'Roboto',
        textTransform: 'uppercase',
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    tripCarousel: {
        width: '40%',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            boxSizing: 'border-box',
            padding: '1rem'
        },

    },
    title: {
        width: '80%',
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
            width: '60%'
        },
    },
    trip: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%'
    },
    exploreTitle: {
        fontWeight: '600',
        fontFamily: 'Roboto',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.6rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2rem'
        },
    },
    tripCard: {
        width: '100%',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: '15px',
        marginTop: '4%'
    },
    btnBook: {
        backgroundColor: '#7E53C8',
        borderRadius: '1rem',
        width: '100%',
        padding: '0.7rem',
        cursor: 'pointer',
        border: 'none',
    },
    btnDetails: {
        backgroundColor: '#7E53C8',
        borderRadius: '1rem',
        width: '100%',
        padding: '0.7rem',
        cursor: 'pointer',
        margin: '2% 0 2.5% 0',
        border: 'none',
        [theme.breakpoints.down('sm')]: {
            marginRight: '2%',
            backgroundColor: 'transparent',
            border: '0.2rem solid #7E53C8'
        },
    },
    btnText: {
        fontWeight: '500',
        color: 'black',
        fontSize: '0.9rem',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '600',
            color: 'white',
            fontSize: '0.8rem'
        },
    },
    cta: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row'
        },
    },
    btnArrow: {
        backgroundColor: 'black',
        color: 'white',
        margin: '0 2% 0 2%',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#7e53C8'
        },
    },
    tripDetails: {
        textAlign: 'justify',
        fontSize: '0.9rem',
        [theme.breakpoints.down('xs')]: {
            fontsize: '0.6rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.2rem'
        },
    },
    tripBox: {
        boxSizing: 'border-box',
        padding: '0.8rem',
        [theme.breakpoints.down('xs')]: {
            fontsize: '0.6rem'
        },

    }
}))

export default useStyles;