import app from "./app.js";
import { db } from "./lib/db.js";

const PORT = process.env.PORT || 8080;

// Start the server
const server = app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

// Connect to the database
await db
  .connect()
  .then(() => console.log(`Database ${db.config.database} connected!`))
  .catch((err) => console.log("Error connecting to database: ", err));
