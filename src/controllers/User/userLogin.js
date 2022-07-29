const bcrypt = require("bcrypt");
const User = require("../../models/User.js");
const Note = require("../../models/Note.js");

const userLogin = async (req,res,next) =>{
    const{username,password} =req.body;
    if(!username || !password){ return res.status(400).json({msg:"Missing data"})};

    const userLog = await User.findOne({
        where:{username},
        include:{model:Note}
    })
    try {
        if(!userLog){return res.status(200).send({ msg: 'User does not exist' })}
        if(userLog){
            if(bcrypt.compareSync(password,userLog.password))
            {return res.status(200).json({msg:"Login success",
            data:{
                id:userLog.id,
                username:userLog.username,
                notes:userLog.notes
            }})}
            
        };
        res.status(200).send({ msg: 'Invalid username or password' })
    } catch (error) {
        next(error)
    }
}

module.exports = userLogin;