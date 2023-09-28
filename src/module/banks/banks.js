import bankModel from "./bankModel.js";
import { Exception } from "../../errors/exceptionErrorHandler.js";

class BankController {
    async GET (req, res,) {
        const allBanks = await bankModel.getBanks()
        res.render('banks.ejs', {
            allBanks: allBanks
        })
    }

    async POST (req, res, next) {
        const { bank_name, bank_loan, bank_loan_year, bank_loan_percent, bank_photo } = await req.filtered
        const newBank = await bankModel.postBank(bank_name, bank_loan, bank_loan_year, bank_loan_percent, bank_photo)
        .catch( err=> next(new Exception(err.message, 503)))

        if(newBank) res.redirect('/admin/banks')
    }



    async DELETE(req, res, next) {
        const { id } = await req.params
        const removeBank = await bankModel.deleteBank(id)

        if(removeBank) res.status(200).json({
            status: 200,
            message: "Bank successfully deleted"
        })
    }
}

export default new BankController();