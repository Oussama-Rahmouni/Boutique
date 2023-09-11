const mongoose = require('mongoose')

    const articleSchema = new mongoose.Schema({
        titre:{
            type:String,
            required:true
        },
        prix:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        quantite:{
            type:Number,
        },
        disponibilite:{
            type:Boolean,
            required:true
        }
    })


module.exports = mongoose.model('Article', articleSchema)