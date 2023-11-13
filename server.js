const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

require('dotenv').config()


let db,
  dbConnectionSTR = process.env.DB_STRING
dbName = "demo"


// De1S13ShnAB6yOio: passowrd for server

// const url = "mongodb+srv://demo:demo@cluster0-q2ojb.mongodb.net/test?retryWrites=true"; this was the original url or code that leon had on his code.
const url = "mongodb+srv://fernandojhernandez123:De1S13ShnAB6yOio@cluster0.78sswj1.mongodb.net/?retryWrites=true&w=majority"


app.listen(5050, () => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
      throw error;
    }
    db = client.db(dbName);
    console.log("Connected to `" + dbName + "`!");
  });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('messages').find().sort({ rating: -1 }).toArray((err, result) => {//goes to db (our datbase), goes into the collection 'messages', finds all the documents in the messages collections, plugs those documents/objects into an array with toArray. thumbg 
    if (err) return console.log(err)
    res.render('index.ejs', { messages: result })//renders the result from the messages collection through ejs so that ejs can spit it out as html. "render our ejs using this data from messages"
  })
})


app.post('/messages', (req, res) => {

  db.collection('messages').insertOne({ name: req.body.name, rating: req.body.rating, bookReport: req.body.bookReport, likes: 0 }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/messages', (req, res) => {
  db.collection('messages')
    .findOneAndUpdate({ name: req.body.name, rating: req.body.rating, bookReport: req.body.bookReport }, {
      $inc: {
        likes: 1
      }
    }, {
      sort: { _id: -1 },
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
})


app.put('/messagessort', (req, res) => {
  db.collection('messages')
    .sort({ rating: -1 }, {
      $set: { //$sets something from the database and the code below allows us to SET the thumbs up to its value plus one.  
        rating: req.body.rating,

      }
    }, {
      sort: { _id: -1 },
      upsert: true
    }, (err, result) => {
      if ('name' == '' || rating == '') return res.send(err)
      res.send(result)
    })
})

//app.delete seems to go through on the dom becaiuse it looks like the the event listener is triggered but doesnt actually delete the post. 

app.delete('/messages', (req, res) => {
  const { name, rating, bookReport, likes } = req.body;
  console.log(req.body)
  db.collection('messages').findOneAndDelete({ name, rating, bookReport, likes }, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
