const Note = require("../../models/Note.js")

const editNote = async(req,res,next)=>{
    const{id,title,description,tags} = req.body;
    if(!id || !title || !description){return res.status(400).json({msg:"Missing data"})};

    try {
        const updateNote = await Note.update(
            {title,
            description,
            tags
            }, 
            {where:{id}
        })     
        
        if(updateNote[0] !== 0){
            return res.status(201).json({msg:"Note updated"})
        }else{
            res.status(400).send("Note not found")
        }

    } catch (error) {
        next(error)
    }

}


module.exports = editNote;