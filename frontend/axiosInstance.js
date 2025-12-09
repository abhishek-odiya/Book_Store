import axios from "axios";

export const bookBaseUrl = axios.create({
    baseURL: "https://book-store-2kj6.onrender.com",
});
