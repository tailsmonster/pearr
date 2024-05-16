import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = '/api';

export const checkForLoggedInUser = async () => {
  const [data] = await fetchHandler(`${baseUrl}/me`);
  console.log(data)
  return data;
};

export const logUserIn = async ({ username, password }) => (
  await fetchHandler(`${baseUrl}/login`, getPostOptions({ username, password }))
);

export const logOrganizationIn = async ({username, password}) => 
  await fetchHandler(`${baseUrl}/loginOrganization`,getPostOptions({username,password}));


// the logout route pretty much can't fail with our setup, but if yours can, change this
export const logUserOut = async () => {
  console.log(await fetchHandler(`${baseUrl}/logout`, deleteOptions));
  return true;
};
