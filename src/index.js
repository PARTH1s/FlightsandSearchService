const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const db = require("./models/index");

// Swagger configuration
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Flight Booking API",
    version: "1.0.0",
    description: "API documentation for the Flight Booking system",
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/v1/*.js"],  
};

const swaggerSpec = swaggerJSDoc(options);

const SetUpAndStartServer = async () => {
  const app = express();

  // Middleware to parse request bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Serve Swagger UI
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // API routes
  app.use("/api", ApiRoutes);

  // Start the server and optionally sync database
  app.listen(PORT, async () => {
    console.log(`Server started at http://localhost:${PORT}`);
    if (process.env.SYNC_DB) {
      await db.sequelize.sync({ alter: true });
      console.log("Database synced successfully.");
    }
  });
};

// Initialize the server
SetUpAndStartServer();
