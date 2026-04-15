# Admin Panel Setup

## Overview
The admin panel allows you to add new products to your clothing store through a simple web interface.

## Features
- Product form with all required fields
- Multiple image upload to Cloudinary
- Size selection with visual feedback
- Form validation and error handling
- Success/error message display

## Setup

### 1. Cloudinary Configuration
1. Create a [Cloudinary](https://cloudinary.com) account
2. Go to your Dashboard → Settings → Upload
3. Create an upload preset (set to "Unsigned" for simplicity)
4. Note your Cloud Name and Upload Preset name

### 2. Environment Variables
Create a `.env.local` file in the root directory:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset_here

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 3. Start the Backend
Make sure your backend server is running on port 5000:

```bash
cd backend
npm run dev
```

### 4. Access Admin Panel
Visit: `http://localhost:3000/admin`

## Form Fields

### Required Fields:
- **Name**: Product name (max 100 characters)
- **Price**: Product price (e.g., "$29.99")
- **Description**: Product description (max 1000 characters)
- **Fabric**: Fabric composition
- **Care**: Care instructions
- **Images**: At least one product image
- **Sizes**: At least one size selection

### Image Upload:
- Supports multiple image selection
- Uploads to Cloudinary automatically
- Preview with remove option
- Shows upload progress

### Size Selection:
- Click to select/deselect sizes
- Visual feedback for selected sizes
- Shows selected sizes list

## API Integration

The form submits data to your backend API:
```
POST /api/products
```

Expected response format:
```json
{
  "success": true,
  "data": { ...productData }
}
```

## Error Handling

- Form validation for required fields
- Image upload error handling
- API error display
- Loading states for better UX

## Security Notes

For production use, consider:
- Adding authentication to the admin panel
- Using signed Cloudinary uploads
- Input sanitization
- Rate limiting
- HTTPS for all requests