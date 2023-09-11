const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.MONGO, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('connexion à la base de données ');
      })
    .catch((error) => {
      console.error('there is something wrong here  :', error);
    });
  

const app = express();


app.listen(process.env.PORT, () => {
  console.log('Le serveur est actif maintenant');
});
