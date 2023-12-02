import express from 'express';
import "dotenv/config";
// import { ConnectDB } from './SRC/DB/ConnectDB.js';



const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.listen(process.env.PORT_NUMBER,() => {
    console.log(`Server listin on port ${process.env.PORT_NUMBER}`);
    // ConnectDB();
})