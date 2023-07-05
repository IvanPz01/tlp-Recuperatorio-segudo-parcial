const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_ingreso = document.querySelector("#fechaingreso");
const fecha_salida = document.querySelector("#fechasalida");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_ingreso.value = data.fecha_ingreso;
  fecha_ingreso.value = dayjs(data.fecha_ingreso).format("DD-MM-YYYY");
  fecha_salida.value = dayjs(data.fecha_salida).format("DD-MM-YYYY");
});
