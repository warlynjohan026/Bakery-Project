import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },

  altimg: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
}, {collection: 'card'});

const cardOffer = mongoose.model('Card', cardSchema)

export default cardOffer;