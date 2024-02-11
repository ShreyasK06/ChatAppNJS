import express, { json } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
    "https://api.chatengine.io/users/",
    {username: username, secret: username,first_name:username},
    {headers: { "private-key" : "0524351f-27f4-4977-bfa2-f9ca4777fe6e "}})
    
    return res.status(r.status).json(r.data);

  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

//id 9ea5af7d-9dc9-479a-9b63-cd1779d394e3

app.listen(5000);