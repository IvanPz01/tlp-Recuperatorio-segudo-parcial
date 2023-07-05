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

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_ingreso: fecha_ingreso.value,
    fecha_salida: fecha_salida.value,
  };

  const response = await fetch(`/api/${reservaId}`, {
    method: "PUT",
    body: JSON.stringify(reservaActualizada),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const errorRes = await response.json();

  if (response.status !== 200) {
    return Swal.fire({
      title: "Error",
      text: errorRes.message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  Swal.fire({
    title: "Reserva actualizada",
    text: respToJson.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
