import AcronomyModel from "../db/model/acronomy";


class AcronmyService{
    // Add acronmy

    static async createAcronmy(req){
        const data = await AcronomyModel.create(req.body)
        return data
    }

    //get All acronmy


    static async getAll(req){
        const data = await AcronomyModel.find()
        return data;
    }

    //get One by id

    static async getOneById(req){
        const data = await AcronomyModel.findById({_id:req.params.id},req.body)

        return data
    }

    //update acronmy

    static async updateAcronmy(req){
        await AcronomyModel.findByIdAndUpdate({_id:req.params.id},req.body)
        const data = AcronomyModel.findOne({_id:req.params.id})
        return data;

    }

    //deate acronmy

    static async deleteAcronmy(req){
        const data = await AcronomyModel.deleteOne({_id:req.params.id})
        return data
    }



}

export default AcronmyService