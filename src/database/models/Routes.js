import { Schema } from 'mongoose'

const routeSchema = new Schema({
    route : String,
    type : String,
    via: String,
    destinations : Object
})

export default routeSchema