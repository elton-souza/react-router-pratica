import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const busca = async(url, setPosts) => {
    const response = await api.get(url);
    console.log(response.data)
    setPosts(response.data)
};
