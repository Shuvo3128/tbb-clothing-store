const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  price: {
    type: String,
    required: [true, 'Product price is required']
  },
  images: [{
    type: String,
    required: [true, 'At least one product image is required']
  }],
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  fabric: {
    type: String,
    required: [true, 'Fabric information is required']
  },
  care: {
    type: String,
    required: [true, 'Care instructions are required']
  },
  sizes: [{
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    required: [true, 'At least one size is required']
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);