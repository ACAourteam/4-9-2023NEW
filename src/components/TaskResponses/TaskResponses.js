import { toCountTime } from "../../utils/utils";
import { useTaskResponsesStyles } from "./TaskResponses.styles";
import telephone from "../../assets/images/telephone.png";
import { v4 as uuidv4 } from "uuid";

function TaskResponses({ responses }) {
  const styles = useTaskResponsesStyles();

  return responses.length ? (
    <div className={styles.responses}>
      <div style={{ background: "#535353FF", padding: "10px" }}>Responses</div>
      {responses.map((response) => (
        <div key={uuidv4()} className={styles.responseValue}>
          <p> Hello I'm {response.nameSurname}</p>

          <p>{response.aboutPerson}</p>
          <p
            style={{
              background: "#6E4700FF",
              borderRadius: 10,
            }}
          >
            I suggest - {response.suggest}
          </p>
          <p>{response.email}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={telephone}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
              <p>{response.contactNumber}</p>
            </div>
            <p>{toCountTime(response.time)}</p>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default TaskResponses;
