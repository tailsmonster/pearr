import { fetchHandler, getPatchOptions, getPostOptions } from "../utils";

const baseUrl = '/api/organizations';

export const createOrganization = async ({username, password, pfp_url}) => (
  fetchHandler(baseUrl, getPostOptions({username,password,pfp_url}))
);

export const getAllOrganizations = async () => {
  const [organizations] = await fetchHandler(baseUrl);
  return organizations || [];;
}

export const logOrganization = async (id) => await fetchHandler(`${baseUrl}/${id}`);

export const updateOrganization = async ({id, username, password, pfp_url}) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({id,username, password,pfp_url}))
);