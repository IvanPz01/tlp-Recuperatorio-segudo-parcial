const formCrearReserva = document.querySelector("#formNuevaReserva");

formCrearReserva.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const fecha_ingreso = document.querySelector("#fecha_ingreso").value;
  const fecha_salida = document.querySelector("#fecha_salida").value;

  const cliente = {
    nombre,
    apellido,
    fecha_ingreso,
    fecha_salida,
  };

  const response = await fetch("/api", {
    method: "POST",
    body: JSON.stringify(cliente),
    headers: {
      "Content-Type": "application/json", // Cuando se envían datos JSON al servidor
    },
  });

  if (response.status !== 201) {
    return Swal.fire({
      title: "Error",
      text: "Hubo un error al crear la reserva",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }

  const data = await response.json();

  Swal.fire({
    title: "Reserva creada",
    text: data.message,
    icon: "success",
    confirmButtonText: "Aceptar",
  });

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
