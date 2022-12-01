import  express  from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./routes";


const app = express();
app.use(bodyParser.json());
 app.use("/acronym",route)

const dbUrl = process.env.DATABASE_Url;
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true,})
.then(()=>{
    console.log("Database Connected Successfuly");
})
const port = process.env.PORT || 4045;
app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})

export default app