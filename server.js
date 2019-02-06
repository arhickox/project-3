require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

// BEGIN DB CONNECTION INFO
const { MongoClient, ObjectID } = require('mongodb');
let client;

// returns a Promise which resolves to the new or existing database connection
const connect = (url = process.env.MONGODB_URI) => {
  if (client) {
    return Promise.resolve(client);
  }

  return MongoClient.connect(url, { useNewUrlParser: true })
    .then(function (_client) {
      client = _client;
      console.log('Connected successfully to server for default Mongo database');
      return client;
    });
};

const dbConnect = () => connect().then(client => client.db());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// serves bundled react application IN PRODUCTION
app.use(express.static('client/build'));

app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT
  );
});

module.exports = app;

app.get('/api/characters', async (req, res, next) => {
  try {
    const db = await dbConnect();
    const characters = await db.collection('characters')
      .find({})
      .toArray();

    res.json(characters);
  } catch (error) {
    next(error);
  }

});

app.get('/api/characters/:characterId', async (req, res, next) => {
  try {
    const db = await dbConnect();
    const character = await db.collection('characters')
      .findOne({
        _id: new ObjectID(req.params.characterId)
      });

    res.json(character);
  } catch (error) {
    next(error);
  }

});

app.post('/api/characters', async (req, res, next) => {
  try {
    const db = await dbConnect();
    const result = await db.collection('characters')
      .insertOne(req.body);

    res.json({ characterId: result.insertedId });
  } catch (error) {
    next(error);
  }

});

app.put('/api/characters/:characterId', async (req, res, next) => {
  try {
    const db = await dbConnect();
    await db.collection('characters')
      .updateOne(
        { _id: new ObjectID(req.params.characterId) },
        {
          $set: req.body
        }
      );

    // https://httpstatuses.com/204
    res.status(204).end();
  } catch (error) {
    next(error);
  }

});

app.delete('/api/characters/:characterId', async (req, res, next) => {
  try {
    const db = await dbConnect();
    await db.collection('characters')
      .deleteOne(
        { _id: new ObjectID(req.params.characterId) },
      );

    // https://httpstatuses.com/204
    res.status(204).end();
  } catch (error) {
    next(error);
  }

});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
