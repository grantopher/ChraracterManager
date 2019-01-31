const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/character-sheets";

MongoClient.connect(url, (error, db) => {
    if (error) {
        console.error(error);
        throw error;
    }
    console.info("Database created");
    db.close();
});
