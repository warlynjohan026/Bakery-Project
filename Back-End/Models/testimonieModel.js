import mongoose from "mongoose";

const testimonieSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    
    customer: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },

    purchased: {
        type: String,
        required: true
    }
    
}, { collection: 'testimony' });

const TestimonyComments = mongoose.model("Testimony", testimonieSchema);
export default TestimonyComments;