const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
    rate: { type: Number },
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }

  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Product', Product);
