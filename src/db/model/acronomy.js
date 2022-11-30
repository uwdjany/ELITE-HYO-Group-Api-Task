import mongoose from "mongoose";

//Schema of acronomy

const acronomySchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    }
},{timestamps:true})

const acronomyDb = mongoose.model('acronym',acronomySchema);


export default acronomyDb;
