import { Location } from '../database';

const getLocation = (req, res) => {
    Location.find({}).then(doc => {
        console.log(doc)
        res.send(doc)
    }).catch(e => {
        console.log(e)
    })
}

export default getLocation