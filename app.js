// Accedemos al elemento 'select' donde se selecciona un carro o una moto
const get_vehicle = document.getElementById("type_vehicle");

// accedemos al elemento de dias a rentar, nombre y telefono
const days_to_rental = document.getElementById("quantity");
const client_name = document.getElementById("client_name");
const client_number = document.getElementById("phone_number");

console.log(client_name.value);

// funcion que activa la cantidad de dias a alquilar, nombre y telefono cuando se selecciona un vehiculo
function activatefield() {
  if (get_vehicle.value !== "") {
    days_to_rental.disabled = false;
    client_name.disabled = false;
    client_number.disabled = false;
  } else {
    days_to_rental.disabled = true;
    client_name.disabled = true;
    client_number.disabled = true;
  }
}
// acceder al boton
const button = document.getElementById("button");

// acceder valores de los campos
function calculate_payment() {
  const car_price = 50000;
  const motorbike_price = 30000;
  // acceder valores de los input
  days = parseInt(days_to_rental.value);
  name = client_name.value;
  number = client_number.value;

  if (get_vehicle.value === "car") {
    return console.log(days * car_price);
  } else {
    return console.log(days * motorbike_price);
  }
}

function showCard() {}
