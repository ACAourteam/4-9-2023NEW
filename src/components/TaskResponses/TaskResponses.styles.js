import { createUseStyles } from "react-jss";

export const useTaskResponsesStyles = createUseStyles({
  responses: {
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
  responseValue: {
    marginTop: "30px",
    borderRadius: "10px",
    background: "#875700FF",
    padding: "10px 50px",
  },
});
