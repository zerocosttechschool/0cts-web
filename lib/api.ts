import axios from "axios";

export const brevoAPI = axios.create({
  baseURL: "https://api.sendinblue.com/v3",
  headers: {
    "api-key": process.env.BREVO_API_KEY,
  },
});

export const clientAPI = axios.create({
  baseURL: "/api",
});
