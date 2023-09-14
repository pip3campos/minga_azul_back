import Author from "../models/Author.js"
import Company from "../models/Company.js"

const ifRole = async (req, res, next) => {
    try {
        if (req.user.role === 1) {
            let one = await Author.findOne({ user_id: req.user._id })
            req.author = one
            return next()
        }
        if (req.user.role === 2) {
            let one = await Company.findOne({ user_id: req.user._id })
            req.company = one
            return next()
        }
        
    } catch (error) {
        return res.status(403).status({
            success: false,
            response: null,
            messages: ['not allow']
        })        
    }
}

export default ifRole