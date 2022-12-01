import mongoose from "mongoose";

//Schema of acronomy

const acronomySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true

    },
    description:{
        type:String,
        // required:true
    }
},{timestamps:true})

const acronomyDb = mongoose.model('acronym',acronomySchema);


export default acronomyDb;
