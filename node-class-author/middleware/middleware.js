const jwt = require("jsonwebtoken")
const authorModel = require("../model/authorModel")
const { ObjectId } = require("mongoose").Types

const authentication = async (req, res, next) => { 
    try {
        // const Authorization = req.headers["token"] //x-api-key, token
        //  const token = req.headers["x-api-key"]
        const Authorization = req.headers["authorization"]
       console.log(Authorization)
        if (!Authorization) {
            return res.status(401).send({ message: "Please login first || Unauthourised" })
        }
        // let verifiedToken;
        jwt.verify(Authorization, "secret", function (err, decoded) {
            if (err) {
               
                return res.status(400).send({ message: err.message })
            } else {  
                verifiedToken = decoded
                console.log(decoded)
            }
        })
        next()
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }  
}
 
const authorization = async (req, res, next) => {
    try {
        const idFromToken = verifiedToken.email
        const { email } = req.query

        const checkAuthor = await authorModel.findOne({ email: email }) 
        console.log(checkAuthor)

        if (idFromToken !== email) {
            return res.status(403).send({ message: "Forbidden / You have not access of this route " })
        }
        next();
    } catch (error) {
        return res.status(500).send({ message: error.message })

    }
}


const blogauthentication = async (req, res, next) => {
    try {
        const Authorization = req.headers["authorization"]
        console.log(Authorization)
        if (!Authorization) {
            return res.status(401).send({ message: "Please login first || Unauthourised" })
        }
        jwt.verify(Authorization, "secret", function (err, decoded) {
            if (err) {
                return res.status(400).send({ message: err.message })
            } else {
                verifiedToken = decoded
                console.log(decoded)
            }
        })
        next()
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const authorizationblog = async (req, res, next) => {
    try {
        const titleFromToken = verifiedToken.title
        const { title } = req.query
        if(title !== titleFromToken){
            return res.status(403).send({ message: "Forbidden / You have not access of this route " })
        }
        jwt.verify(Authorization, "secret", function (err, decoded) {
            if (err) {
                return res.status(400).send({ message: err.message })
            } else {
                verifiedToken = decoded
                console.log(decoded)
            }
        })
        next();

} catch (error) {
    return res.status(500).send({ message: error.message })
}
}




module.exports = { authentication, authorization,blogauthentication,authorizationblog }


 