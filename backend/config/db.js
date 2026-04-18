const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  const fallbackURI = process.env.MONGO_FALLBACK_URI;

  if (!mongoURI) {
    throw new Error('MONGO_URI environment variable is not defined');
  }

  const connect = async (uri) => {
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
  };

  try {
    console.log('Trying MongoDB SRV URI...');
    await connect(mongoURI);
    console.log('MongoDB connected');
    console.log('MongoDB host:', mongoose.connection.host);
  } catch (error) {
    console.error('SRV connection failed:', error.message);

    if (fallbackURI) {
      try {
        console.log('Trying MongoDB fallback URI...');
        await connect(fallbackURI);
        console.log('MongoDB connected with fallback URI');
        console.log('MongoDB host:', mongoose.connection.host);
        return;
      } catch (fallbackError) {
        console.error('Fallback connection failed:', fallbackError.message);
      }
    }

    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;