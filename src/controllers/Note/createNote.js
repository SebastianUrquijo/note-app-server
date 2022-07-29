const User = require("../../models/User.js")
const Note = require("../../models/Note.js")


const createNote = async(req,res,next)=>{
    const{id,title,description,tags} = req.body;
    if(!id || !title || !description){return res.status(400).json({msg:"Missing data"})};

    try {
        const userLog = await User.findOne({
            where:{id}
        })

        const newNote = await Note.create({
            title,
            description,
            tags
        })

        await userLog.addNote(newNote)
        

        if(newNote){return res.status(201).json({msg:"Note created"})}

    } catch (error) {
        next(error)
    }

}


module.exports = createNote