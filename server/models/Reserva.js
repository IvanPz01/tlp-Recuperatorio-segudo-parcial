// TODO: Crear modelo de datos de Reserva

const { sequelize, DataTypes } = require("../database");

const pasajeros = sequelize.define(
  "pasajeros",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_de_vuelo: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  }
);
pasajeros.sync({ force: true }).then(() => {
  console.log("Tabla de Reservas creada");
});
module.exports = cliente;
