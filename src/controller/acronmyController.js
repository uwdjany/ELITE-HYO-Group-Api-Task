import  Response from "../utilis/response"
import AcronmyService from "../services/acronmyServices";


class AcronmyController{
    //Add Controller

    static async createAcronmy(req,res){
        const acronomy = await AcronmyService.createAcronmy(req);
        if(!acronomy){
            return Response.errorMessage(res, "Failed to create", 400)
        }
        return Response.successMessage(
            res,
            "Acronomy Successful Created",
            acronomy,
            200
        )
    }
    //get All acronomy

    static async getAll(req,res){
        const acronomy = await AcronmyService.getAll(req);
        if(!acronomy){
            return Response.errorMessage(res, "Not Found Acronomy", 400);

        }
        return Response.successMessage(
            res,
            "Acronomy Successfully to retrived",
            acronomy,
            200
        );
    }
    //Update

    static async updateAcronmy(req,res){
        const acronomy = await AcronmyService.updateAcronmy(req);

        if(!acronomy){
            return Response.errorMessage(res,"Not Found Acronomy",400);

        }
        return Response.successMessage(
            res,
            "Acronomy Successful to retrived",
            acronomy,
            200
        )
    }

    //getOne by Id

    static async getOneById(req,res){
        const acronomy = await AcronmyService.getOneById(req);

        if(!acronomy){
            return Response.errorMessage(res, "Acronomy Not Found",400)
        }
        return Response.successMessage(
            res,
            "Acronomy Successful to retrieved",
            acronomy,
            200
        )
         
    }

    //Delete 

    static async deleteAcronmy(req,res){
        const acronomy = await AcronmyService.deleteAcronmy(req);
        if(!acronomy){
            return Response.errorMessage(res, "Acronomy Not Found", 400)
        }
        return Response.successMessage(
            res,
            "Deleted acronmy",
            acronomy,
            200
        )
    }


}

export default AcronmyController