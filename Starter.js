import app from "./App.js";
import { PORT } from "./config/env.js";
import connectToDataBase from "./routes/database/mangodb.js";
app.listen(PORT, async ()=>{
    console.log(`app is running on http://localhost:3000/`)
    await connectToDataBase()
  })