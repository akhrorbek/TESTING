import express from 'express'
import cosr from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import routes from './module/routes.js'
import loginRoutes from './module/login/loginRoute.js'
import verifyToken from './middlewares/verifyToken.js'
import ejs from 'ejs'
import path from 'path'
import exceptionMiddleware from './middlewares/exceptionMiddleware.js'
import clientRoot from './module/client/clientRoot.js'
dotenv.config()

const app = express()

app.use(express.json())
// app.use(cosr ({
//     origin:'http://localhost:5173'
// }))
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src', 'views'))
app.use('/assets', express.static(path.join(process.cwd(), 'src', 'assets')))
app.use(express.urlencoded())
app.use(cookieParser())
app.use(loginRoutes)
app.use(clientRoot)
app.use(verifyToken)
app.use(routes)
app.use(exceptionMiddleware)

app.use('/*', (_, res) =>{
    res.render('notFound.ejs')
})
app.listen(9594, console.log(9594))