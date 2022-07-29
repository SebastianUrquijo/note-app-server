const User = require("../../models/User.js")
const bcrypt = require("bcrypt")

const createUSer = async(req,res,next)=>{
    const {username,password,validation} = req.body;
    if(!username || !password || !validation){return res.status(400).json({msg:"Missing data"})};
    if(password !== validation){ return res.status(400).json({msg:"Passwords do not match"})};
    try {
        const existUN = await (
            User.findOne({where:{username}})
        )
        if(existUN){return res.status(301).json({msg:"User already exists"})};
            
        const newUser = await User.create({
            username,
            password: bcrypt.hashSync(password,8)
        })

        if(newUser){return res.status(201).json({msg:"User registered"})}
    
    } catch (error) {
        next(error)
    }
}


module.exports = createUSer;