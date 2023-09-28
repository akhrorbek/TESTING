import PG from '../../utils/postgres.js'

class Company extends PG {
    getCompany() {
       return this.fetchData('SELECT * FROM companies')
    }
    postCompany (comp_name, comp_photo_link) {
        return this.fetchData('INSERT INTO companies(comp_name, comp_photo_link) VALUES($1, $2)',
        comp_name,
        comp_photo_link)
    }
    deleteCompany(id) {
        return this.fetchData('DELETE FROM companies WHERE comp_id = $1', id)
    }

}

export default new Company();