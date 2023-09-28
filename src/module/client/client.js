import companies from '../companies/model.js'
import complex from '../complexes/complexModel.js'

class dataController {
    async GET(req, res, next) {
        const allCompanies = await companies.getCompany()
        res.render('client.ejs', {
            allCompanies : allCompanies,
        })
    }

    async POST(req, res, next) {
        const { comp_name } = req.body
        const allComplexes = await complex.getComplex()
        const foundComplex = allComplexes?.find(e=> e.comp_name == comp_name)
    }
}

export default new dataController()