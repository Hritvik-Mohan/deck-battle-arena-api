const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
