import  express  from "express";
import "dotenv/config";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 4045;
app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})

export default app