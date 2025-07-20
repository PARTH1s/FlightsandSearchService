// const express = require("express");

// const bodyParser = require("body-parser");

// const { PORT } = require("./config/serverConfig");

// const ApiRoutes = require("./routes/index");

// const db = require("./models/index");

// const SetUpandStartServer = async () => {
//   // create the express object
//   const app = express();

//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({ extended: true }));

//   app.use("/api", ApiRoutes);

//   app.listen(PORT, async () => {
//     console.log(`Server Started at ${PORT}`);
//     if (process.env.SYNC_DB) {
//       db.sequelize.sync({ alter: true });
//     }
//   });
// };

// SetUpandStartServer();
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const db = require("./models/index");

// Swagger definition and options
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

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

const SetUpandStartServer = async () => {
  // create the express object
  const app = express();

  // Body parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Serve Swagger UI
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // API routes
  app.use("/api", ApiRoutes);

  // Start the server
  app.listen(PORT, async () => {
    console.log(`Server Started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};

SetUpandStartServer();
