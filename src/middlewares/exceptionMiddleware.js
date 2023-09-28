import { Exception } from "../errors/exceptionErrorHandler.js";

export default (err, _, res, __) => {
    if(err instanceof Exception) {
        return res.render('error.ejs',{
            message: err.message,
            status: err.status

        })
    }

    res.status(500).json({
        message:"Internal error",
        status: 500
    })
}