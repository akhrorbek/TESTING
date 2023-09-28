import { Exception } from '../errors/exceptionErrorHandler.js'

export default scheme => {
    return (req, res, next) =>{
        const { error, value } = scheme.validate(req.body)
        if(error) {
            return next(new Exception(error.message, 400))
        }

        req.filtered = value
        next()
    }
}