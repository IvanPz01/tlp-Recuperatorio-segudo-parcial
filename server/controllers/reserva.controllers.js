const pasajeros = require("../models/Reserva");
const Reserva = require("../models/Reserva");
const ctrl = {};

//         vistas para las reservas

ctrl.renderListaReservas = (req, res) => {
  res.render("listado-reserva.ejs");
};

ctrl.renderFormNuevaReserva = (req, res) => {
  res.render("nueva-reserva.ejs");
};

ctrl.renderFormEditarReserva = (req, res) => {
  const { id } = req.params;
  res.render("editar-reserva", { id });
};

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.obtenerReservas = async (req, res) => {
  try {
    const reservas = await pasajeros.findAll({
      where: {
        estado: true,
      },
    });

    return res.json(reservas);
  } catch (error) {
    console.log("Error al obtener las reservas", error);
    return res.status(500).json({
      message: "Error al obtener las reservas",
    });
  }
};

// Obtener una reserva
ctrl.obtenerReserva = async (req, res) => {
  try {
    const { id } = req.params.id;
    const reserva = await pasajeros.findOne({
      where: {
        estado: true,
        id,
      },
    });
    return res.json(reserva);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al obtener la reserva",
    });
  }
};

// Crear una reserva
ctrl.crearReserva = async (req, res) => {
  const { nombre, apellido, fecha_de_vuelo, cantida_personas } = req.body;

  try {
    const nuevaReserva = new pasajeros({
      codigo: new Date().getTime(),
      nombre,
      apellido,
      fecha_de_vuelo,
      cantida_personas,
    });

    await nuevaReserva.save();

    return res.status(201).json({ message: "Reserva creada con éxito" });
  } catch (error) {
    console.log("Error al crear la reserva", error);
    return res.status(500).json({ message: "Error al crear la reserva" });
  }
};

// Actualizar una reserva
ctrl.actualizarReserva = async (req, res) => {
  const reservaId = req.params.id;
  const { nombre, apellido, fecha_de_vuelo, cantida_personas } = req.body;
  try {
    const reserva = await Reserva.findByPk(reservaId);
    reserva.update({
      nombre,
      apellido,
      fecha_de_vuelo,
      cantida_personas,
    });
    return res.json(reserva);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message,
    });
  }
};
// Eliminar una reserva de forma lógica
ctrl.eliminarReserva = async (req, res) => {
  try {
    const { id } = req.params.id;
    if (!id) {
      throw {
        status: 400,
        message: "No se ha enviado el id de la reserva",
      };
    }
    const reserva = await Reserva.findByPk(id);
    await reserva.update({ estado: false });
    return res.json({ message: "Reserva se eliminó correctamente" });
  } catch (error) {
    console.log("Error al eliminar la reserva", error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al eliminar la reserva",
    });
  }
};

module.exports = ctrl;
