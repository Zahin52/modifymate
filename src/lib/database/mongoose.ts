import mongoose, {Mongoose} from "mongoose";

const MONGODB_URL = encodeURIComponent(process.env.MONGODB_URL!)

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    console.log("cached fallback")
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async () => {
    console.log("connected to db")
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error("Missing MONGODB_URL");

    cached.promise = cached.promise || 
    mongoose.connect(MONGODB_URL, {
        dbName: "modifymate", bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn
} 