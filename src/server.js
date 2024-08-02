// Import
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import inventarisRoute from "./routes/clothesRoute.js";



// Configure dotenv
dotenv.config();

// Initialize
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/inventaris', inventarisRoute);



app.listen(PORT, () => {
console.log("Server is running on port 3000");
});
