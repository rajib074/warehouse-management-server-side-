const express = require('express')
var cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yxgqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("rajib").collection("productCollection");
  console.log('rajib is ok');
  // perform actions on the collection object
  client.close();
});





app.get('/', (req, res) => {
  res.send('Hello all World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})