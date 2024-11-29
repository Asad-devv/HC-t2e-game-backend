const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  energy: { type: Number, default: 100 },
  full_energy: { type: Number, default: 100 },
  tap: { type: Number, default: 0 },
  limit: { type: Number, default: 10 },
  daily_coins: { type: Number, default: 0 },
});

module.exports = mongoose.model("Wallet", WalletSchema);
