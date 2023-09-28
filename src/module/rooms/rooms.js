import roomsModel from './roomsModel.js'
import model from '../complexes/complexModel.js'
import { Exception } from '../../errors/exceptionErrorHandler.js'

class RoomController {
     async GET (req, res) {
         const allRooms = await roomsModel.getRooms()
         const allComplexes = await model.getComplex()
         res.render('rooms.ejs', {
             allRooms: allRooms,
             allComplexes: allComplexes
         })
     }

    async POST (req, res, next) {
        const {compx_name, room_number, room_size, room_cost, room_photo} = await req.filtered
        const getComplex = await model.getComplex()

        const foundUid = getComplex.find(e=> e.compx_name == compx_name)
        const { compx_id = foundUid.compx_id } = await req.filtered


        const newRoom = await roomsModel.postRooms(compx_name, room_number, room_size, room_cost, room_photo, compx_id)
        .catch(err => next(new Exception(err.message, 503 )))

        if(newRoom) res.redirect('/admin/rooms')
    }

    async DELETE(req, res, next) {
        const { id } = await req.params
        const removeRoom = await roomsModel.deleteRooms(id)

        if(removeRoom) res.status(200).json({
            status: 200,
            message: "Complex successfully deleted"
        })
    }
}

export default new RoomController();