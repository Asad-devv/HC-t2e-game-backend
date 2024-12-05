const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");
const walletRoutes = require("./routes");

const app = express();

// Middleware
app.use(bodyParser.json());
const corsOptions = {
  "origin": "*",
  "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
  // other options
}

app.use(cors(corsOptions));


// MongoDB Connection
const MONGO_URI = "mongodb+srv://ullah4406732:asad1234@cluster0.nco1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Update with your connection string
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/wallet", walletRoutes);


// Telegram Bot Integration
const BOT_TOKEN = "7866889095:AAGu5UvDh54cEDwNvjNpaDWqQAz2oa8Z1Hc"; // Replace with your bot token
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Define /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
  });
  
  bot.sendMessage(chatId, "Dive into the Fun! Put your reflexes to the test, challenge your friends, and dominate the leaderboard. Unlock exciting rewards, earn Gold Vouchers, and enjoy exclusive benefits in the Hoodie Chicken universe. 📢 Interested in Advertising? Contact us at info@hoodiechicken.com for more details!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Game",
            web_app: { url: "https://hc-t2e-game-frontend.vercel.app/" },
          },
        ],
      ],
    },
  });
});

// Start Server
const PORT = 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
