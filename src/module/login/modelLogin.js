import PG from "../../utils/postgres.js";

class Login extends PG {

    getAdmin() {
        return this.fetchData('SELECT * FROM admin')
    }

    postLogin(username, password) {
        return this.fetchData('VALUES($1, $2)', username, password)
    }
}

export default new Login()