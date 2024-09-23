import express from "express";
import teamRoutes from "./routes/teamRoutes";
import counterRoutes from "./routes/counterRoutes";
import { setupSwagger } from "./swagger";

const app = express();
app.use(express.json());

// Setup routes
app.use("/api", teamRoutes);
app.use("/api", counterRoutes);

// Setup Swagger
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
