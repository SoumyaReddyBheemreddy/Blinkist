import { makeStyles } from "@mui/styles";

export const cardStyle = makeStyles((theme) => {
  return {
    bookcard: {
      height: "475px",
      width: "284px",
      position: "relative",
      /* White */

      background: "#FFFFFF",
      /* Grey/300 */

      borderRadius: "8px",
      boxSizing: "border-box",
    },

    cardmedia: {
    
      width: "294.1px",
      
    },
    statusView:{
        display:"flex",
        paddingBottom:"14px" 
    },
    timeStatus: {
      display: "flex",
      paddingTop: "17px",
    },
    timeIcon: {
      "&.MuiSvgIcon-root": {
        left: "8.33%",
        right: "8.33%",
        top: "8.33%",
        bottom: "8.33%",
        width: "16.67px",
        height: "16.67px",
        marginRight: "5.67px",
        color: "#6D787E",
      },
    },
    userIcon:{
         paddingLeft:"47px",
        "&.MuiSvgIcon-root": {
            left: "16.67%",
            right: "16.67%",
            top: "4.17%",
            bottom: "8.33%",
            width: "16.67px",
            height: "17.5px",
            marginRight: "7.33px",
            color: "#6D787E",
          },
    },
    text: {
        left: "14.08%",
        top: "82.83%",
        bottom: "13.3%",
        
    },
    moreicon: {
       
        marginLeft: "87%",
      
    },
    link:{
      display: "flex",
      justifyContent: "center",
      paddingTop: "15px",
    
    },
  };
});
