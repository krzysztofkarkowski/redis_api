const express = require('express')
const app = express()
const port = 3000
const redis = require('redis')
const client = redis.createClient({
    url: 'redis://127.0.0.1:6379'
});
client.on('error', (err) => {
    console.log('Redis Client Error', err);
});

app.use(express.json());

app.get('/get_data/:key', async (req, res) => {
    const key = req.params.key;

    try {
        await client.connect();
        const value = await client.get(key);
        console.log(value);
        res.send(`Value for key ${key}: ${value}`);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.quit();
    }
});

app.get('/set_data', async (req, res) => {
    const key = req.query.key;
    const value = req.query.value;

    try {
        await client.connect();
        await client.set(key, value);
        res.status(200).json({ message: 'Data added successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.quit();
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

