if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

module.exports = {
    PORT : process.env.PORT,
     NOMBRE_APLICACION : process.env.NOMBRE_APLICACION,
     MONGO_URI:process.env.MONGO_URI
}