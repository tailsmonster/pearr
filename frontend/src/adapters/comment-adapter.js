import { deleteOptions, fetchHandler, getPostOptions } from "../utils";

const baseUrl = "/api/comments";

export const createComment = async (
  programId,
  userId,
  organizationId,
  body
) => {
  const time = JSON.stringify(new Date().toLocaleString());
  console.log(time);
  return await fetchHandler(
    baseUrl,
    getPostOptions({ programId, userId, organizationId, body, time })
  );
};

export const getAllUserComments = async (id) => {
  const [comments] = await fetchHandler(`${baseUrl}/all/${id}`);
  console.log(comments);
  return comments || [];
};

export const getSpecificComment = async (id) =>
  await fetchHandler(`${baseUrl}/${id}`);

export const updateComment = async (id, body) => {
  const time = new Date();
  console.log(time);
  return await fetchHandler(`${baseUrl}/${id}`, getPostOptions({ body, time }));
};

export const getAllProgramComments = async (id) =>
  await fetchHandler(`/api/programs/comments/${id}`);

export const deleteComment = async (id) =>
  await fetchHandler(`${baseUrl}/${id}`, deleteOptions);
