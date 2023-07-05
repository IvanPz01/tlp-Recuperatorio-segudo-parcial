// Imports
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
require("ejs");

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
  res.write(`<div>
            <h1>404 - Ruta no encontrada</h1>
            <hr>
            <p>La pagina que intentas buscar no existe</p>
            <p>Redireccionando a la página de inicio...</p>
            <script>
            (
              () => setTimeout(() => {
                window.location.href='http://localhost:${port}/';
               }, 3000)           
            )();
            </script>
        </h1>`);
});

// Starting the server
app.listen(45635, () => console.log("http://localhost:${port}/tareas"));
