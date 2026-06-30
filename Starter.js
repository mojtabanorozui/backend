import app from "./App.js";
import { PORT } from "./config/env.js";
app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:3000/`)
  })