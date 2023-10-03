import pkg from "jsonwebtoken";
const { verify } = pkg;

const verifyc = async (req, res, next) => {
    const decodedToken = verify(req.token, process.env.SECRET);
    if (decodedToken) {
        res.status(200).json({ response: "valid" });
    } else {
        res.status(401).json({ response: "invalid" });
    }
};
export default verifyc;