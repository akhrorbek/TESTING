import PG from "../../utils/postgres.js";

class Complex extends PG {

    getComplex () {
        return this.fetchData('SELECT * FROM complexes')
    }

    postComplex (compx_name, compx_photo, comp_name, comp_id) {
        return this.fetchData('INSERT INTO complexes(compx_name, compx_photo, comp_name, comp_id) VALUES($1, $2, $3, $4)',
        compx_name,
        compx_photo,
        comp_name,
        comp_id)
    }

    deleteComplex(id) {
        return this.fetchData('DELETE FROM complexes WHERE compx_id = $1', id)
    }


}

export default new Complex()