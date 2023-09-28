import PG from '../../utils/postgres.js';


class Rooms extends PG {
     getRooms () {
         return this.fetchData('SELECT * FROM rooms')
     }

    postRooms (compx_name, room_number, room_size, room_cost, room_photo, compx_id) {
        return this.fetchData('INSERT INTO rooms(compx_name, room_number, room_size, room_cost, room_photo, compx_id) VALUES($1, $2, $3, $4, $5, $6)',
        compx_name,
        room_number,
        room_size,
        room_cost,
        room_photo,
        compx_id)
    }

    deleteRooms(id) {
        return this.fetchData('DELETE FROM rooms WHERE room_id = $1', id)
    }


}

export default new Rooms()