import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
    connectionString:process.env.DATABASE_URL ?? 'postgres://qdsczqyg:2-7br7qwQ8JIjyPybL074npDaKzFFVOg@floppy.db.elephantsql.com/qdsczqyg'
})


class PG {
    #pool = pool
    async fetchData (SQL, ...params) {
        const client = await this.#pool.connect()
        try {
            const { rows } = await client.query(SQL, params.length ? params : null)
            return rows
        } finally {
            client.release()
        }
    }
}

export default PG;