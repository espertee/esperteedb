const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//const bodyParser = require("body-parser");
//app.use(bodyParser.json({limit: '100kb'}));

require('dotenv').config();
//require('dotenv').config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '500kb'}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,});

/** 
const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://espertee:tetraxi@cluster0.nmj0h.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
*/
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const account = require('./routes/account');
const coupon = require('./routes/coupon');
const task = require('./routes/task');
const note = require('./routes/note');
const pending = require('./routes/pending');
const ref = require('./routes/ref');
const amount = require('./routes/amount');
const report = require('./routes/report');
const resp = require('./routes/resp');
const status = require('./routes/status');
const weed = require('./routes/weed');
const cweed = require('./routes/cweed');


app.use('/account',account);
app.use('/coupon', coupon);
app.use('/task', task);
app.use('/note', note);
app.use('/pending', pending);
app.use('/ref', ref);
app.use('/amount',amount);
app.use('/report',report);
app.use('/resp',resp);
app.use('/status',status);
app.use('/weed',weed);
app.use('/cweed',cweed);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
