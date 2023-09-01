import User from '../../models/User.js'

export default async(req,res) => {
    try {
        let allUsers = await User.find()
        res.json({
            success: true,
            message: "auth",
            response: allUsers
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "error"
        })
    }
}