import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
