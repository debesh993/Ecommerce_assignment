import express from "express";
import connecttodatabase from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/authRoute.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connecttodatabase()



app.use(cookieParser());

app.use(cors({
    origin: "*", 
    credentials: true, 
}));
app.use(express.json()); 

app.use("/api/auth",router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
