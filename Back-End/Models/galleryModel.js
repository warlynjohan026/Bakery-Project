import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },

    altImg: {
        type: String,
        required: true
    }
}, { collection: 'gallery' });

const GalleryImgs = mongoose.model('Gallery', gallerySchema);
export default GalleryImgs