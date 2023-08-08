//Dependencies
const mongoose = require('mongoose');

const connectionUri = process.env.MONGO_URL; // Directly use the entire connection string from the environment variable

const db = async () => {
    try {
        // Remove warning for deprecated features
        mongoose.set('strictQuery', true);

        // Log the connection URI (you can remove this if you don't want to log the connection URI)
        console.log(connectionUri);

        await mongoose.connect(connectionUri, {
            // Remove mongoose dependency warnings
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database Connected Successfully');
    } catch (err) {
        throw new Error(err);
    };
};

module.exports = { db, mongoose };
