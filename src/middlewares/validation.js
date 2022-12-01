import { check,validationResult } from "express-validator";

class Validator{
static validateInput = (req,res,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        const errorMessage=errors.errors.map((err)=>err.msg);
        return res.status(400).json({
            status:400,
            message:errorMessage
        })
    }
    return next()
}

static newAcronmyRules(){
    return[
        check("description"," description should not be empty").isAlphanumeric(),

    ]
}


}

export default Validator;