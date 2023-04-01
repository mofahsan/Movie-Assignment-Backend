
const MOVIEMODEL = require("../models/movies")

const getMovies =async (req,res,next) => {
    try{
        const result = await MOVIEMODEL.find({is_active:1})
        res.status(200).send({success:true,data:result})
    }
    catch(error){
        res.status(500).send({success:false,message:error.message})
    }
}

const postMovies =async  (req,res,next) => {
    try{   
        const {title,rating,releaseDate} = req.body

        if(!title || !rating || !releaseDate){
            return res.status(400).send({success:false,message:"All fields are mandatory"})
        }
        if(req.file){
            req.body.image = req.file.filename
        }

        const ifexist = await MOVIEMODEL.findOne({is_active:1,title:title})
        if(ifexist){
            return  res.status(400).send({success:false,message:"This movie already exists in database"})   
         }
         
        const result = await MOVIEMODEL({...req.body,is_active:1}).save()

        if(result){
             res.status(200).send({success:true,message:"Movies saved successfully"})
        }else{
             res.status(400).send({success:false,message:"An error occured while saving to database"})
        }
    }
    catch(error){
        res.status(500).send({success:false,message:error.message})
    }
}

module.exports = {getMovies,postMovies}