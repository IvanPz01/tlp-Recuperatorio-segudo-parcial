// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require("express").Router();

const {
  renderListaReservas,
  renderFormNuevaReserva,
  renderFormEditarReserva,
  obtenerReservas,
  obtenerReserva,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", renderListaReservas);
// Formulario para crear una reserva
router.get("/crear-reserva", renderFormNuevaReserva);
// Formulario para actualizar una reserva
router.get("/actualizar-reserva/:id", renderFormEditarReserva);

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api", obtenerReservas);

// Crear una reserva
router.post("/api", crearReserva);

router.get("/api/:id", obtenerReserva);

// Actualizar una reserva
router.put("/api/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", eliminarReserva);

module.exports = router;
