const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const pacienteRoutes = require('./routes/pacienteRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/', (req, res) => {
  return res.json({ message: 'Welcome!!' });
});

app.use( pacienteRoutes);

mongoose.connect('mongodb+srv://cparedesescobar:pW42GrmW8217Gda1@cluster0.3amspiz.mongodb.net/?retryWrites=true&w=majority', {
  autoIndex: true
})
.then(() => {
  console.log('DB CONNECTED!!');
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});