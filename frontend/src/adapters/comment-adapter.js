import { fetchHandler, getPostOptions } from "../utils";

const baseUrl = "/api/comments";

export const createComment = async (programId, userId, body) => {
  const time = new Date();
  console.log(time);
  console.log(
    await fetchHandler(
      baseUrl,
      getPostOptions({ programId, userId, body, time })
    )
  );
};

export const getAllUserComments = async (id) => {
  const [comments] = await fetchHandler(`${baseUrl}/all/${id}`);
  console.log(comments);
  return comments || [];
};

export const getSpecificComment = async (id) => {
  console.log(await fetchHandler(`${baseUrl}/${id}`));
};

export const updateComment = async (id, body) => {
  const time = new Date();
  console.log(time)
  console.log(await fetchHandler(`${baseUrl}/${id}`, getPostOptions({ body, time })));
};
