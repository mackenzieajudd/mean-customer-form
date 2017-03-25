const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost/customerform');

app.use(express.static('/public'));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());

app.listen(8080);
console.log('Hosted on localhost:8080');

const Customer = mongoose.model('customer', {
  name: String,
  email: String,
  company: String,
});

app.get('/api/customers', (req, res) => {
  Customer.find((err, customers) => {
    if (err) return res.send(err);
    return res.send(customers);
  });
});

app.post('/api/customers', (req, res) => {
  Customer.create({
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
  }, (err, customer) => {
    if (err) return res.send(err);
    return res.send(customer);
  });
});

app.delete('/api/customers/:customer_id', (req, res) => {
  Customer.remove({
    _id: req.params.customer_id,
  }, (err, customer) => {
    if (err) return res.send(err);
    return res.send(customer);
  });
});
