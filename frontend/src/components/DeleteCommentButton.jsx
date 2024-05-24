import { deleteComment, getAllProgramComments } from "../adapters/comment-adapter";

const DeleteCommentButton = ({id, setComments,programId}) => {
  const onClick = async() => {
    const comment = await deleteComment(id);
    setComments((await getAllProgramComments(programId))[0]);
  }
  return (
    <button onClick={onClick}>Delete</button>
  );
}

export default DeleteCommentButton;
