require('dotenv').config();

import {connection, connect }from 'mongoose'
const source = process.env.MONGODB_URI
const conn = {
    isConnected: false
}

export async function connectDb(){
//if already connected don't repeat the connection again if not, continue code and connect
if(conn.isConnected) return

   const db = await connect(source)/* mongodb://localhost/campeones */
console.log(db.connection.db.databaseName)
conn.isConnected = db.connections[0].readyState
}
/* console.log("uri", source)
 */
connection.on('connected', () => {
    console.log("Mongoose is connected")
})
connection.on('error', (err)=>{
    console.log('Mongoose connection error', err)
})