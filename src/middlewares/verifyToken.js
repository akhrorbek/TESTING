import jwt from 'jsonwebtoken'
import { Exception } from '../errors/exceptionErrorHandler.js'

export default (req, res, next) =>{
    const { access_token } = req.cookies

    if(!access_token) {
        return next(new Exception("Provide token", 401))
    }

    jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) =>{
        if(err instanceof jwt.JsonWebTokenError)
        return next(new Exception("Invalid token", 401))

        req.username = decode.username
        req.password = decode.password
        next()
    })
}