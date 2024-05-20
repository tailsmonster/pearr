import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useContext, useState } from "react";
import {
  createComment,
  getAllProgramComments,
} from "../adapters/comment-adapter";
import CurrentUserContext from "../contexts/current-user-context";

const MakeComment = ({ id, setComments }) => {
  const [body, setBody] = useState("");
  const {isOrganization, currentUser} = useContext(CurrentUserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = currentUser;
    const data = Object.fromEntries(new FormData(e.target));
    // console.log(isOrganization, user)
    const [comment] = await createComment(
      id,
      !isOrganization ? user.id : null,
      isOrganization ? user.id : null,
      data.body
    );
    // console.log(comment)
    const [allComments] = await getAllProgramComments(id);
    setComments(allComments);
    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isOrganization && <p>Official Post:</p>}
        <label htmlFor="form-make-comment-body">Body: </label>
        <input
          type="text"
          name="body"
          id="form-make-comment-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <button>Create</button>
      </form>
    </div>
  );
};

export default MakeComment;
