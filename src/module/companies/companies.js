import model from "./model.js";
import { Exception } from "../../errors/exceptionErrorHandler.js";

class CompanyController {
    async GET (req, res) {
        const allCompanies = await model.getCompany()
        res.render('company.ejs', {
            allCompanies: allCompanies
        })
    }

    async POST(req, res, next) {
        const { comp_name, comp_photo_link } = req.filtered
        const newCompany = await model.postCompany(comp_name, comp_photo_link)
        .catch(err => next(new Exception(err.message, 503 )))

        if(newCompany) res.redirect('/admin/companies')

        // if(newCompany) res.status(201).json({
        //     status: 201,
        //     message: "New Company successfully created"
        // })
    }

    async DELETE(req, res, next) {
        const { id } = await req.params
        const removeCompany = await model.deleteCompany(id)
        console.log(req.params);

        if(removeCompany) res.status(200).json({
            status: 200,
            message: "Company successfully deleted"
        })
    }
}

export default new CompanyController()