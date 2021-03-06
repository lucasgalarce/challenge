require("dotenv").config();

const {
  NODE_ENV,
  
  PORT,
  API_PORT,
  API_HOST,
  API_CORS,

  DB_CONNECTION_URI,
  DB_NAME,
  SECRET,

} = process.env;

module.exports = {
  NODE_ENV,
  
  API: {
    CORS: API_CORS,
    PORT: PORT || API_PORT || 8081,
    HOST: API_HOST,
    SECRET: SECRET || "javascript"
  },
  DB: {
    NAME: DB_NAME,
    CONNECTION_URI: DB_CONNECTION_URI,
  },
};
