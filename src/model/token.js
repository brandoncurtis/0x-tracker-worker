const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = Schema(
  {
    address: String,
    circulatingSupply: Number,
    decimals: Number,
    imageUrl: { type: String, trim: true },
    name: String,
    resolved: Boolean,
    symbol: String,
    totalSupply: Number,
    type: Number,
  },
  { timestamps: true },
);

schema.index({ address: 1 }, { unique: true });
schema.index({ resolved: 1 });
schema.index({ type: 1 });

const Model = mongoose.model('Token', schema);

module.exports = Model;
