import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Views Directory
app.set("views", path.join(__dirname, "views"));


// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});


// Start Server
app.listen(port, () => {
    console.log(`Server is running on port $(port)`);
});

