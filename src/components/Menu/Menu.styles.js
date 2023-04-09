import { createUseStyles } from "react-jss";

export const useMenuStyles = createUseStyles({
  register: {
    background: "white",
    marginLeft: "50px",
  },
  btnStyles:{
    display:"flex",
    flexWrap:"wrap",


  },
  "@media (max-width : 500px)": {btnStyles:{flexDirection:"column"}}

});
