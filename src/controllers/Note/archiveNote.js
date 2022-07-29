const Note = require("../../models/Note.js")


const archiveNote = async(req,res,next)=>{
    const{id, isActive} = req.body;
    if(isActive !== true && isActive !== false || !id){return res.status(400).json({msg:"Missing valid data"})};
    
    try {
        const updateNote = await Note.update(
            {isActive: !isActive},
            {where:{id}
        })     
        if(updateNote[0] !== 0){
            if(isActive){return res.status(201).json({msg:"Note archived"})}
            if(!isActive){return res.status(201).json({msg:"Note unarchived"})}
        }else{
            res.status(400).send("Note not found")
        }

    } catch (error) {
        next(error)
    }

}


module.exports = archiveNote;