
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); y

mongoose.connect('mongodb://localhost:27017/take2media', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
// mongo data(schema ony)

const enquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone_no: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Enquiry = mongoose.model('Enquiry', enquirySchema);
//req
app.post('/enquiry', (req, res) => {
    const { name, email,phone_no, message } = req.body;
    const newEnquiry = new Enquiry({ name, email,phone_no, message});
    newEnquiry.save()
        .then(() => res.status(200).send("Saved"))
        .catch(err => res.status(500).json({ error: err }));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
