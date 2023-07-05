// TODO: Crear modelo de datos de Reserva

const { sequelize, DataTypes } = require("../database");

const cliente = sequelize.define(
  "Cliente",
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
    fecha_ingreso: {
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
cliente.sync({ force: false }).then(() => {
  console.log("Tabla de Reservas creada");
});
module.exports = cliente;
