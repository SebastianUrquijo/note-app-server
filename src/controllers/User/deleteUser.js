const User = require("../../models/User.js");
const bcrypt = require("bcrypt");

const deleteUser = async (req,res,next) =>{
    const {id,password} = req.body;
    if(!id || !password){return res.status(400).json({msg:"Missing data"})};

    const userLog = await User.findOne({
        where:{id}
    })
    try {
        if(userLog){
        if(bcrypt.compareSync(password,userLog.password)){
            await User.destroy({
                where:{id}
            })
            return res.status(200).json({msg: "User deleted"});
        } return res.status(400).send({ msg: 'Invalid password' })
        }res.status(404).send({ msg: 'User not found' })

    } catch (error) {
        next(error)
    }
}

module.exports = deleteUser;