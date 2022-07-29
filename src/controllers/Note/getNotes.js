const Note = require("../../models/Note.js");

const getNotes = async (req, res, next) => {
    const{userId} = req.query
    if(!userId){return res.status(400).json({msg:"Missing valid data"})};
    try {

        const userNotes = await Note.findAll(
            {where:{ userId}
            });

        res.status(200).send(userNotes);

    } catch (error) {
        next(error);
    }
}

module.exports = getNotes;