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

// Funcion que calcula el precio a pagar dependiendo el vehiculo que haya elegido
function calculate_payment() {
  // acceder valores de los campos
  const car_price = 50000;
  const motorbike_price = 30000;

  // acceder valores de los input, pasamos el days a entero para hacer operaciones con el
  days = parseInt(days_to_rental.value);
  name = client_name.value;
  number = client_number.value;

  if (get_vehicle.value === "car") {
    total_car = days * car_price;
    console.log(days * car_price);
    return total_car;
  } else {
    total_motorbike = days * motorbike_price;
    console.log(days * motorbike_price);

    return total_motorbike;
  }
}

function showcard() {
  // Verificar si hay campos vacíos
  if (
    get_vehicle.value === "" ||
    days_to_rental.value === "" ||
    client_name.value === "" ||
    client_number.value === ""
  ) {
    alert("Por favor complete todos los campos");
    return;
  }
  // asignamos el valor que nos da la funcion a resultado
  let total_to_pay = calculate_payment();
  // seleccionamos card
  let card = document.getElementById("show_card");

  // creamos el html que va ir dentro del div con la clase "show_card"
  card = card.innerHTML = `            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Total alquiler:</h5>
                <h6 class="card-text">Vehiculo:<span>${get_vehicle.selectedOptions[0].textContent}</span></h6>
                <h6 class="card-text">Dias: <span>${days_to_rental.value}</span></h6>
                <h6 class="card-text">Nombre: <span>${client_name.value}</span></h6>
                <h6 class="card-text">Telefono: <span>${client_number.value}</span></h6>
                <h6 class="card-text">Total: <span>${total_to_pay}</span></h6>
                <button type="button" class="btn btn-primary" id="button" onclick="show_alert()">
                  Confirmar Compra
                </button>
              </div>
            </div>`;
}

function show_alert() {
  alert(
    "Pago realizado con éxito para " +
      client_name.value +
      " con el teléfono " +
      client_number.value
  );
  location.reload();
}
