const express = require('express')
const app = express()
const axios = require('axios')

const port = 3000
const FOREING_API_URL = 'https://jsonplaceholder.typicode.com/';

const getPost = async (number) => {
  try {
    return await axios.get(`${FOREING_API_URL}posts/${number}`)
  } catch (error) {
    console.error(error)
  }
}

app.use(express.static('dist'));
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/:id', async (req, res) => {
  try {
    const result = await getPost(req.params.id);
    res.send(result.data);
  } catch {
    res.statusCode = 500;
    res.send('Bad Request!');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})