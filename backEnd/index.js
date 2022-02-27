const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://alps-db-user:Tata_Sept2021@alps-cluster.ll7eq.mongodb.net/alps-db?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        uri, { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));