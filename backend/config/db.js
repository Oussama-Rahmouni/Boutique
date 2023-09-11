const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('La connexion à la base de données est établie');
  })
  .catch((error) => {
    console.error('Le problème est :', error);
  });
