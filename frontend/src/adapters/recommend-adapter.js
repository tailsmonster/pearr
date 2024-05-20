import { fetchHandler, getPostOptions } from "../utils";

const baseUrl = '/api/recommends';

export const createRecommend = async ({programId,userId, recommend}) => fetchHandler(baseUrl, getPostOptions({programId, userId, recommend}))

export const getAllRecommends = async () => {
  const [recommends] = await fetchHandler(baseUrl);
  return recommends || [];
}

export const getAllRecommendsOfProgram = async (id) => {
  const [recommends] = await fetchHandler(`/api/programs/recommends/${id}`);
  return recommends || [];
};

export const getAllRecommendsOfUser = async (id) => {
  const recommends = await fetchHandler(`/api/users/programs/${id}`);
  return recommends || [];
}