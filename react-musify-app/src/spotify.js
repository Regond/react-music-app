import axios from "axios";

const authEndpoint = 'https://accounts.spotify.com/authorize?',
      clientID =  '7206f7705f26434b8370f90501806e30' ,
      redirectUri = 'http://localhost:3000';

const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });