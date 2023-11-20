const jwt = require('jsonwebtoken')



const authenticate = (req, res, next) => {
    const authorizationHeader = req.headers.authorization

    if(!authorizationHeader || !authorizationHeader.startsWith("Bearer ")){
        return res.status(401).json({
            Error: "Must Login First"
        })
    }
    const token = authorizationHeader.split(" ")[1];

    try{
        const loginSession = jwt.verify(token, "bagasngidiw")

        // console.log("This is session", loginSession);
        res.locals.loginSession = loginSession
        next()
    }catch(error){
        return res.status(401).json({
            error: "Wrong Token!"
        })
    }
}

export default authenticate