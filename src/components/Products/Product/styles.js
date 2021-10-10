import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
    maxWidth: '100%',
    border: '0.5px solid #222222',
  },
  media: {
    height: 'auto',
    maxHeight: '100%',
    width: 'auto',
    maxWidth: '100%',
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: '20px',
  },
  productPrice: {
    fontSize: '18px',
  },
  expandButton: {
    borderRadius: '5px',
    width: '100%',
    padding: '15px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: '#222222',
    color: 'white',
    justifyContent: 'left',
    transition: 'background 0.2s',
    fontSize: '14px',
    '&:hover':{
      backgroundColor: '#333333',
    }
  },
}));