import { Exception } from "../../errors/exceptionErrorHandler.js";
import { sign } from '../../utils/jwt.js'
import adminModel from './modelLogin.js'

class LoginController {
    async GET(req, res, next) {
        res.render('login.ejs')
    }

    async POST(req, res, next) {
        const { username, password } = await req.filtered
        const admin = await adminModel.getAdmin()
        const foundAdmin = admin?.find(e=>e.admin_username == username && e.admin_password == password)
        if(!foundAdmin) {
            return next(new Exception("User not found", 404))
        }
        if(foundAdmin) {
            res.cookie("access_token", sign({username:foundAdmin?.username, password:foundAdmin?.password}))
            return res.redirect('/admin/companies')
        }
        console.log(admin);

    }
}

export default new LoginController()