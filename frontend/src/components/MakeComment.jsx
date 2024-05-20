import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useState } from "react";
import { createComment } from "../adapters/comment-adapter";

const MakeComment = ({id}) => {
  const [body, setBody] = useState("");
  const [isOrganization, setIsOrganization] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await checkForLoggedInUser();
    setIsOrganization(user[0]);
    const data = Object.fromEntries(new FormData(e.target));
    const comment = await createComment(id,user[1],data.body);
    console.log(comment)
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