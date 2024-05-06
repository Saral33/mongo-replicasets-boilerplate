import mongoose from 'mongoose';

const uri = 'mongodb://mongo1:27017,mongo2:27018,mongo3:27019/?replicaSet=rs0';

mongoose
  .connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));
