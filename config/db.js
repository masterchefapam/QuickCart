import mongoose from "mongoose";

let cached = global.mongoose;

if(!cached){
     cached = global = {conn:null,promise:null}
}

async function connectDB(){
    if(cached.conn){
        return cached.conn
  }

  if(!cached.promise){
    const opts = {
        bufferCommands:false
    }

    cached.promise =  mongoose.connect(`${process.env.MONGODB_URI}/masterchefapam`,opts).then(mongoose =>{
        return mongoose
    })
  }


  cached.conn = await cached.promise
  return cached.connS
}

export default connectDB