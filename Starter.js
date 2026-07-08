import app from "./App.js";
import { PORT } from "./config/env.js";
import connectToDataBase from "./routes/database/mangodb.js";

const startServer = async () => {
  await connectToDataBase();
  app.listen(PORT, () => {
    console.log(`app is running on http://localhost:3000/`);
  });
};

startServer();