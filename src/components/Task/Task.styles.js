import { createUseStyles } from "react-jss";

export const useTaskStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    color: "white",
  },
  menu: {
    width: "100%",
    minHeight: "60px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    background: "#535353",
    paddingRight: 20,
  },
  main: {
    background: "#333333",
  },
  task: {
    width: "700px",
    height: "600px",
    background: "#A76C00FF",
    marginTop: 40,
    margin: "auto",
    borderRadius: "40px",
  },
  taskTop: {
    width: "700px",
    display: "flex",
    padding: "20px 20px 0 20px",
    justifyContent: "space-between",
  },
  middle: {
    textAlign: "center",
  },
  taskName: {
    background: "#333333",
    borderRadius: 10,
    textAlign: "center",
    padding: 2,
  },
  typeTask: {
    border: "1px solid white",
    marginTop: 10,
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },

  taskDescription: {
    width: 230,
    height: 130,
    border: "3px solid #76675FFF",
    borderRadius: 10,
    textAlign: "center",
  },
  buttons: {
    textAlign: "center",
    marginTop: 20,
  },
  downArrowIcon: {
    width: "20px",
    height: "20px",
  },
});
