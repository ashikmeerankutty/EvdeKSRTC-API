import mongoose from 'mongoose'
import routeSchema from './models/Routes'
import locationSchema from './models/Location';

export const Connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true })
        mongoose.connection.on('error', (error) => {
            reject(error)
        })
        mongoose.connection.once('open', () => {
            console.log("Connected to Mongo Db")
            resolve(mongoose.connection)
        })
    })
}

export const Route = mongoose.model('bus_routes',routeSchema)
export const Location = mongoose.model('locations',locationSchema)



