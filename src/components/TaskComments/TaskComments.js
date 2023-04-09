import { toCountTime } from "../../utils/utils";
import { useTaskCommentsStyles } from "./TaskComments.styles";
import { v4 as uuidv4 } from "uuid";

function TaskComments({ comments }) {
  const styles = useTaskCommentsStyles();
  return comments?.length ? (
    <div className={styles.comments} key={uuidv4()}>
      <div style={{ background: "#535353FF", padding: "10px" }}>Comments</div>
      {comments.map((comment) => (
        <div key={uuidv4()} className={styles.commentValue}>
          <p>{comment.commentValue}</p>
          <p>{toCountTime(comment.time)}</p>
        </div>
      ))}
    </div>
  ) : null;
}
export default TaskComments;
