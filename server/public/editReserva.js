const formReserva = document.querySelector("#formNuevaReserva");
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fecha_de_vuelo = document.querySelector("#fechaingreso");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_de_vuelo.value = data.fecha_de_vuelo;
  fecha_de_vuelo.value = dayjs(data.fecha_de_vuelo).format("DD-MM-YYYY");
});

formReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_de_vuelo: fecha_de_vuelo.value,
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
