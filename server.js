const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routersUrl = require('./routes/routes');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())
app.use('/api',routersUrl);

app.get('/', (req, res) => {
  res.send('backend developed by Ayush Sharma Gietu')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
