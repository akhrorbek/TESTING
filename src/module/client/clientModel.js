import PG from "../../utils/postgres.js";


class client extends PG {

    postData(comp_name) {
        return this.fetchData('VALUES($1)', comp_name)
    }
}

export default new client()