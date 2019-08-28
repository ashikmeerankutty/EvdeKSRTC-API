import { Schema } from 'mongoose'

const locationSchema = new Schema({
    route : String,
    type : String,
    destinations : Object
})

export default locationSchema