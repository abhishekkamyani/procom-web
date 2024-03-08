const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// History Schema
const historySchema = new Schema({
  customerAccount: {
    type: String,
    required: true
  },
  merchantAccount: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'], // Example status values; customize as needed
    required: true
  }
  // Additional fields specific to the transaction history can be added here
  // For example: transactionDate, description, etc.
});

// Customer Schema
const customerSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
    unique: [true, 'Username must be unique.']
  },
  accountNumber: {
    type: String,
    required: [true, 'Account number is required.'],
    unique: [true, 'Account number must be unique.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: [true, 'Email must be unique.']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required.'],
    unique: [true, 'Phone number must be unique.']
  },
  password: {
    type: String,
    required: [true, 'Password is required.']
  },
  role: {
    type: String,
    default: "customer"
  },
  history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'History'
  }]
});


customerSchema.index({ email: 1, accountNumber: 1, phoneNumber: 1, username: 1 }, { unique: true });


// Creating Customer model from the schema
const Customer = mongoose.model('Customer', customerSchema);

// Creating History model from the schema
const History = mongoose.model('History', historySchema);

module.exports = {
  Customer,
  History
};
