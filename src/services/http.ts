import { BASE_URL } from "../constants/constants";

const http = async (url: string, method?: string, data?: object) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (err) {
      return new Error("Data fetching error");
    }
  };
 
export default http;
