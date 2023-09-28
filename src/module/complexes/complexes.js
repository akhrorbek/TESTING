import complexModel from './complexModel.js'
import model from '../companies/model.js'
import { Exception } from '../../errors/exceptionErrorHandler.js'

class ComplexController {

    async GET (req, res) {
        const allComplexes = await complexModel.getComplex()
        const allCompanies = await model.getCompany()
        res.render('complex.ejs', {
            allComplexes: allComplexes,
            allCompanies: allCompanies
        })
    }

    async POST (req, res, next) {


        const getCompany = await model.getCompany()
        const { compx_name, compx_photo, comp_name } = await req.filtered
        const foundUid = getCompany.find(e => e.comp_name == comp_name)
        const { comp_id = foundUid.comp_id } = req.filtered

        const newComplex = await complexModel.postComplex(compx_name, compx_photo, comp_name, comp_id)
        .catch(err => next(new Exception(err.message, 503 )))

        if(newComplex) res.redirect('/admin/complexes')
    }

    async DELETE(req, res, next) {
        const { id } = await req.params
        const removeComplex = await complexModel.deleteComplex(id)

        if(removeComplex) res.status(200).json({
            status: 200,
            message: "Complex successfully deleted"
        })
    }
}

export default new ComplexController()