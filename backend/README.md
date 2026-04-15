# Clothing Store Backend

A simple Node.js backend for a clothing eCommerce website using Express and MongoDB.

## Features

- Product CRUD operations
- MongoDB with Mongoose
- Error handling middleware
- CORS enabled
- Environment configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update the `MONGO_URI` in `.env` with your MongoDB connection string.

4. Start MongoDB locally or use MongoDB Atlas.

5. Run the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product

### Health Check
- `GET /api/health` - API health status

## Product Schema

```javascript
{
  name: String (required),
  price: String (required),
  images: [String] (required),
  description: String (required),
  fabric: String (required),
  care: String (required),
  sizes: [String] (required, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'])
}
```

## Example Product POST

```json
{
  "name": "Cotton T-Shirt",
  "price": "$29.99",
  "images": ["/images/tshirt-1.jpg", "/images/tshirt-2.jpg"],
  "description": "Comfortable cotton t-shirt for everyday wear",
  "fabric": "100% organic cotton",
  "care": "Machine wash cold, tumble dry low",
  "sizes": ["S", "M", "L", "XL"]
}
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv