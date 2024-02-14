
// const jwt = require('jsonwebtoken');
// const authenticate = async (req, res, next) => {
//     try {
//         const token = req.headers["authorization"] 
//         console.log("token",token)
//        if(!token){
//            return res.status(401).send({message:"Please login first"})
//        }
//       jwt.verify(token, "secret",function(err,decoded){
//             if(err){
//                 return res.status(400).send({message: err.message})
//             }
//             else{
//                verifiedToken = decoded
//             }
//         });
//        next()
    
//     } catch (error) {
//         console.log(error)
//     }
// }

// const authorization = (req, res, next) => {
 
//     try {
//         
//     } catch (error) {
        
//     }
// }

// module.exports = { authenticate } 