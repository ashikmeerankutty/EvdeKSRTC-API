require('dotenv').config()

import app from './core/app'

const PORT = process.env.PORT || 3000

const startApp = () => {
    try{
        app.set('port',PORT)
        app.listen(app.get('port'), ()=>console.log(`Server Running http://localhost:${PORT}`))
    }
    catch(e)
    {
        console.error(e)
    }
}

startApp()