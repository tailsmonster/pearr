// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/users";

export const createUser  = async ({ username, password }) => await fetchHandler(baseUrl, getPostOptions({ username, password }))

export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  console.log(users);
  return users || [];
};

export const getUser = async (id) => await fetchHandler(`${baseUrl}/${id}`)

export const updateUser= async ({ id, username,password,pfp_url }) => await fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username, password, pfp_url }))
