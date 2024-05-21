import React, { useContext, useEffect, useState } from 'react';
import { getUser } from '../adapters/user-adapter';
import { getOrganization } from '../adapters/organization-adapter';
import CurrentUserContext from '../contexts/current-user-context';

const Comment = ({comment}) => {
  const [author, setAuthor] = useState('');
  const [editing, setEditing] = useState(false);
  const {isOrganization, currentUser} = useContext(CurrentUserContext);
  useEffect(()=> {
    const getAuthor = async () => {
      const [user] = await getUser(comment.user_id) || await getOrganization(comment.organization_id);
      setAuthor(user.username);
    }
    getAuthor();

  },[comment])
  return (
    <>
      <li>
        {author}: {!editing && comment.body}
      </li>
      {!isOrganization && comment.user_id === currentUser.id && <button>Edit</button>}
    </>
  );
}

export default Comment;
