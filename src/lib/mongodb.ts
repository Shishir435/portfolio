import mongoose from 'mongoose';

let isConnected = false;

export async function connect() {
  try {
    if (isConnected) {
      console.log('MongoDB is already connected');
      return;
    }

    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL!, {
      // Other options can be added here if needed
    });

    const connection = mongoose.connection;

    connection.once('open', () => {
      console.log('MongoDB connected successfully');
      isConnected = true;
    });

    connection.on('error', (err) => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
      process.exit(1); // Exit the application with an error code
    });
  } catch (error) {
    console.log('Something went wrong while connecting to MongoDB');
    console.error(error);
    isConnected = false;
  }
}


// import mongoose from 'mongoose';
// let isConnected=false;
// export async function connect() {
//     try {
//         if(isConnected){
//             console.log("momngo db is connected")
//             return
//         }
//         mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL!);
//         const connection = mongoose.connection;
       
//         connection.on('connected', () => {
//             console.log('MongoDB connected successfully');
//             isConnected=true
//         })

//         connection.on('error', (err) => {
//             console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//             process.exit();
          
//         })

//     } catch (error) {
//         console.log('Something goes wrong!');
//         console.log(error);
//         isConnected=false
//     }
// }
