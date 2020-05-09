import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    age: Number,
    email: String
});

module.exports = mongoose.model('Customer', customerSchema);