import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/Blog-routes";
import router from "./routes/user-routes "
 const app = express();
app.use(express.json());

 app.use("/api/user", router);
 app.use("/api/blog", blogRouter);
 mongoose.connect('mongodb+srv://admin:jq0vdQD5GkJ9I1Zd@cluster0.6cl58k2.mongodb.net/Blog?retryWrites=true&w=majority')
 .then(() => app.listen(4000))
 .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 4000")
  )
  .catch((err) => console.log(err));

// jq0vdQD5GkJ9I1Zd

//jq0vdQD5GkJ9I1Zd