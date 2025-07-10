import formSchemaModel from "../Models/FormSchema.js";

export const formController = async(req,res)=>{
    try {
        const data = req.body
        const {email , number} = data
        const existingData = await formSchemaModel.findOne({
            $or:[{email},{number}]
        })

        
        
        if(existingData){
            return res.status(400).json({message:"Email or PhoneNo Already Exist"})
        }

        const newFormData = new formSchemaModel(data);
        await newFormData.save();
        res.status(200).json({message:"Data Added on DB"})
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}