import { Route } from '../database/index'


const getRoute = (req, res) => {
    const source = `destinations.${req.body.source.replace('.', ' ')}`
    const destination = `destinations.${req.body.destination.replace('.', ' ')}`
    const type = req.body.type
    if (type !== "All") {
        Route.find({ [source]: { $exists: true }, [destination]: { $exists: true }, type: type }).then(doc => {
            let routeArray = []
            doc.map(elem => {
                let destIndex = elem.destinations[req.body.destination.replace('.', ' ')].id;
                let souIndex = elem.destinations[req.body.source.replace('.', ' ')].id;
                if (souIndex < destIndex)
                    routeArray.push(elem)
            })
            routeArray = routeArray.sort((a, b) => {
                if (a.destinations[req.body.source].time < b.destinations[req.body.source].time)
                    return -1;
                if (a.destinations[req.body.source].time > b.destinations[req.body.source].time)
                    return 1;
                return 0;
            })
            res.send(routeArray)
        }).catch(e => {
            console.log(e)
        })
    }
    else {
        Route.find({ [source]: { $exists: true }, [destination]: { $exists: true } }).then(doc => {
            let routeArray = []
            doc.map(elem => {
                let destIndex = elem.destinations[req.body.destination.replace('.', ' ')].id;
                let souIndex = elem.destinations[req.body.source.replace('.', ' ')].id;
                if (souIndex < destIndex)
                    routeArray.push(elem)
            })
            routeArray = routeArray.sort((a, b) => {
                if (a.destinations[req.body.source].time < b.destinations[req.body.source].time)
                    return -1;
                if (a.destinations[req.body.source].time > b.destinations[req.body.source].time)
                    return 1;
                return 0;
            })
            res.send(routeArray)
        }).catch(e => {
            console.log(e)
        })
    }
}

export default getRoute

