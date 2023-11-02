import mongoose from 'mongoose';
let isConnected=false;
export async function connect() {
    if(isConnected){
        console.log("momngo db is connected")
        return
    }
    try {
        mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL!);
        const connection = mongoose.connection;
       
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
            isConnected=true
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
          
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        isConnected=false
    }


}