const app = require("./app");
const connectDatabase = require("./config/db");
const { serverPort } = require("./secret")

app.listen(3002,async()=>{
    console.log(`Server is running at http://localhost:${serverPort}`);
    await connectDatabase();
})