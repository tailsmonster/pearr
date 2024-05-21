import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../adapters/user-adapter";
import { getOrganization } from "../adapters/organization-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { getAllProgramComments, updateComment } from "../adapters/comment-adapter";

const Comment = ({ comment, setComments }) => {
  const [author, setAuthor] = useState("");
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(comment.body);
  const { isOrganization, currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const getAuthor = async () => {
      const [user] = comment.user_id ? await getUser(comment.user_id) : await getOrganization(comment.organization_id);
      setAuthor(user.username);
    };
    getAuthor();
  }, [comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (body === comment.body) {
      return setEditing((pre) => !pre);
    }
    const updatedComment = await updateComment(+comment.id, body);
    setComments(await getAllProgramComments(comment.program_id));
  };

  return (
    <>
      <li>
        {author}:{" "}
        {!editing ? (
          comment.body
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="body"
                id="edit-comment-body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
              <button>Save</button>
            </form>
          </>
        )}
      </li>
      {!isOrganization && comment.user_id === currentUser.id && !editing && (
        <button onClick={() => setEditing((pre) => !pre)}>Edit</button>
      )}
    </>
  );
};

export default Comment;