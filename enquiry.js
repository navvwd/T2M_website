const mongoose = require('mongoose');
const enquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone_no: String,
    message: String,
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Enquiry', enquirySchema);
