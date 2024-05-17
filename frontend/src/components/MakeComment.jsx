import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useState } from "react";

const MakeComment = ({id}) => {
  const [body, setBody] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await checkForLoggedInUser();
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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