const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (error, client) => {
    if (error) throw error;
    const db = client.db('character-sheets');
    const char = genCharacter();
    db.collection('Sheets').insertOne(char);
    client.close();
});


function genCharacter() {
return {
        name: "STEVE",
        race: "Dwarf"
    }
}
