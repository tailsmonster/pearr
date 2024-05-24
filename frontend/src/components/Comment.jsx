import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../adapters/user-adapter";
import { getOrganization } from "../adapters/organization-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import {
  deleteComment,
  getAllProgramComments,
  updateComment,
} from "../adapters/comment-adapter";
import {doesRecommendExist} from "../adapters/recommend-adapter"

const Comment = ({ comment , update }) => {
  const [author, setAuthor] = useState("");
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(comment.body);
  const { isOrganization, currentUser } = useContext(CurrentUserContext);
  const [confirm, setConfirm] = useState(false);
  const [recommend, setRecommend] = useState(false);

  useEffect(() => {
    setEditing(false)
    const getAuthor = async () => {
      const [user] = comment.user_id
        ? await getUser(comment.user_id)
        : await getOrganization(comment.organization_id);
      setAuthor(user.username);
      if (comment.user_id) {
      const [recommend] = await doesRecommendExist(comment.program_id, comment.user_id)
      setRecommend(recommend);
      }
    };
    getAuthor();
    setBody(comment.body)
  }, [comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (body === comment.body) {
      return setEditing((pre) => !pre);
    }
    const updatedComment = await updateComment(comment.id, body);
    const [newComments] = await getAllProgramComments(comment.program_id);
    comment = updateComment;
    setEditing(false);
    // setComments(newComments);
    update()
  };

  const handleDelete = async () => {
    const deleted = await deleteComment(comment.id);
    const [newComments] = await getAllProgramComments(comment.program_id);
    // setComments(newComments);
    setEditing(false);
    setConfirm(false);
    update()
  };
  return (
    <>
      <div className="single-comment">
        {/* <p>{recommend && `${recommend.recommend}`}</p> */}
        <h4>
          {`${author}: `} {recommend && <p className={recommend.recommend ? "recommends" : "not-recommends"}>{recommend.recommend ? "Recommends " : "Doesn't Recommend " }</p>} {comment.edited && <p className="edited">EDITED</p>}
        </h4>
        <div className="no-author normal-font">
          {!editing ? (
            comment.body
          ) : (
            <>
              <form className="no-author" onSubmit={handleSubmit}>
                <div id="form-buttons">
                  <input
                    type="text"
                    name="body"
                    id="edit-comment-body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <button>Save</button>
                </div>
              </form>
              {!confirm && (
                <button onClick={() => setConfirm(true)}>DELETE</button>
              )}
              {confirm && (
                <>
                  <h3>Are you sure?</h3>
                  <button onClick={() => setConfirm(false)}>Cancel</button>
                  <button onClick={handleDelete}>Confirm</button>
                </>
              )}
            </>
          )}
          {currentUser !== null &&
            !isOrganization &&
            comment.user_id === currentUser.id &&
            !editing && (
              <button onClick={() => setEditing((pre) => !pre)}>Edit</button>
            )}
          {currentUser !== null &&
            isOrganization &&
            comment.organization_id === currentUser.id &&
            !editing && <button onClick={() => setEditing(true)}>Edit</button>}
        </div>
      </div>
    </>
  );
};

export default Comment;