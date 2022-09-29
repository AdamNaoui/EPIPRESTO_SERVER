import express from 'express'

const app = express();
const port = 3000;
app.post('/webhooks/shopify/get-all-products', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
