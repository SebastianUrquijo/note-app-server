const Note = require("../../models/Note.js")


const deleteNote = async(req,res,next)=>{
    const{id} = req.body;
    if(!id){return res.status(400).json({msg:"Missing data"})};

    try {
        await Note.destroy({
            where:{id}
        })
        res.status(200).json({msg: "Note deleted"});

    } catch (error) {
        next(error)
    }
}


module.exports = deleteNote;