const express = require("express");
// const rateioRoutes = require('./src_rateio/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'manifest.json'));
});


app.post("/pubsub", (req, res) => {
    const pubsubMessage = req.body.message;
    console.log(req.body)

    if (pubsubMessage) {
        // Decode base64-encoded message data
        const messageData = Buffer.from(pubsubMessage.data, 'base64').toString('utf-8');

        console.log(`Received message: ${messageData}`);

        // Respond to acknowledge receipt
        res.status(200).send('Message received');
    } else {
        // Handle missing message data
        res.status(400).send('No message received');
    }
});

// app.use("/api/v1/rateio", rateioRoutes);


app.listen(port, () => console.log("okokoko"));
