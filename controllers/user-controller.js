const User = require('../Models/user-model.js');

async function addUser(req, res) {
    try {
        console.log(req.body);
        const userExist = await User.findOne({ sub: req.body.sub });

        if (userExist) {
            return res.status(200).json({ msg: 'User Already Exist' })
        }

        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200);
    } catch (error) {
        console.log('Add User Controller error : ', error);
        return res.status(500).json(error.message);
    }
}

async function getUser(req, res) {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        console.log('Get All Users Controller error : ', error);
        return res.status(500).json(error.message);
    }
}

module.exports = {
    addUser,
    getUser
}