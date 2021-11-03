const Contenedor = require('./src/startup/container');

const  Server = Contenedor.resolve('Servidor');
const  {MONGO_URI} = Contenedor.resolve('Config');
const mongoose = require('mongoose')

async function Main(){


    try {
        mongoose.connect(MONGO_URI,
                {useNewUrlParser : true,
                   
                    useUnifiedTopology: true
                
                
                
                },()=> console.log('mongo conectado')
            
            )
            
            await Server.start()
            

        
        
    } catch (error) {
        console.log(error)
    }

} 


Main();
