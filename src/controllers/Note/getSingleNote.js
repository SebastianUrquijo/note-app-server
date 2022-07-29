const Note = require("../../models/Note.js");

const getSingleNote = async (req,res,next)=>{
    const {id} = req.params
    const {userId} =req.query
    if(!id){return res.status(400).json({msg:"Missing valid data"})};
    try {
        const singleNote = await Note.findOne({
            where:{id,userId}
        })
        if(!singleNote){
            return res.status(400).json({msg:"Note not found"})
        }else{
            res.status(200).send(singleNote)
        }

    } catch (error) {
        next(error)
    }

}

module.exports = getSingleNote