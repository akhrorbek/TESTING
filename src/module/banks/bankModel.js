import PG from '../../utils/postgres.js'

class Banks extends PG {

    getBanks() {
        return this.fetchData('SELECT * FROM banks')
    }

    postBank(bank_name, bank_loan, bank_loan_year, bank_loan_percent, bank_photo) {
        return this.fetchData('INSERT INTO banks(bank_name, bank_loan, bank_loan_year, bank_loan_percent, bank_photo) VALUES($1, $2, $3, $4, $5)',
        bank_name,
        bank_loan,
        bank_loan_year,
        bank_loan_percent,
        bank_photo)
    }

    deleteBank(id) {
        return this.fetchData('DELETE FROM banks WHERE bank_id = $1', id)
    }
}

export default new Banks()