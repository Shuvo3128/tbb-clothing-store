const express = require('express');
const Product = require('../models/Product');
const { upload } = require('../middleware/upload');

const router = express.Router();

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// GET /api/products/:id - Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// 🔥 DELETE /api/products/:id
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product deleted successfully'
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message
    });
  }
});

// POST /api/products - Add new product with image upload
router.post('/', upload, async (req, res) => {
  try {
    const imageUrls = req.files?.images?.map(file => file.path) || [];

    const parseField = (field) => {
      if (typeof field === 'string') {
        try {
          return JSON.parse(field);
        } catch {
          return field;
        }
      }
      return field;
    };

    const productData = {
      name: req.body.name,
      price: req.body.price,
      images: imageUrls.length > 0
        ? imageUrls
        : req.body.images
        ? parseField(req.body.images)
        : [],
      description: req.body.description,
      fabric: req.body.fabric,
      care: req.body.care,
      sizes: req.body.sizes ? parseField(req.body.sizes) : ['S', 'M', 'L'],
    };

    if (!productData.name) {
      return res.status(400).json({
        success: false,
        message: 'Product name is required'
      });
    }

    if (!productData.price) {
      return res.status(400).json({
        success: false,
        message: 'Product price is required'
      });
    }

    if (productData.images.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one product image is required'
      });
    }

    const product = await Product.create(productData);

    res.status(201).json({
      success: true,
      data: product
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages
      });
    }

    console.error('Product creation error:', error);

    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

module.exports = router;