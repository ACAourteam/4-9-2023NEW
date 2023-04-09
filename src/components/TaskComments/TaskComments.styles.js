import { createUseStyles } from "react-jss";

export const useTaskCommentsStyles = createUseStyles({
  comments: {
    margin: "auto",
    height: 220,
    width: 500,
    overflow: "hidden",
    overflowY: "scroll",
    padding: 20,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  commentValue: {
    width: "inherit",
    marginTop: "30px",
    borderRadius: "10px",
    background: "#875700FF",
    padding: "10px 50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
