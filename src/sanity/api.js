const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: process.env.REACT_APP_DATA_SET,
  useCdn: true // `false` if you want to ensure fresh data
});

export default client;
