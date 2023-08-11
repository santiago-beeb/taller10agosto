document.addEventListener("DOMContentLoaded", () => {
  // Taller
  // 1.	Crea una simulación simple de procesamiento de una lista de
  // tareas usando un arreglo. Utiliza unshift() para agregar
  // tareas al principio de la lista y shift() para procesar y
  // eliminar tareas de la lista.
  // •	Imprimiendo un mensaje cuando se agregue la tarea.
  // •	Imprime un mensaje cuando se termine la tarea y se elimine de la lista.
  // •	Imprime el arreglo antes y después del procesamiento

  const tasks = [];
  const taskList = document.getElementById("taskList");
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const processButton = document.getElementById("processButton");

  const updateTaskList = () => {
    taskList.innerHTML = tasks.map((task) => `<li>${task}</li>`).join("");
  };

  const showAlert = (message, alertClass) => {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert ${alertClass}`;
    alertDiv.textContent = message;
    document.body.insertBefore(alertDiv, document.body.firstChild);

    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  };

  const addTask = () => {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
      tasks.unshift(newTask);
      const message = `Tarea agregada: ${newTask}`;
      showAlert(message, "alert-primary");
      updateTaskList();
    }
    taskInput.value = "";
  };

  const processTask = () => {
    if (tasks.length > 0) {
      const processedTask = tasks.shift();
      const message = `Tarea procesada y eliminada: ${processedTask}`;
      showAlert(message, "alert-success");
      updateTaskList();
    } else {
      showAlert("No hay tareas pendientes.", "alert-warning");
    }
  };

  addButton.addEventListener("click", addTask);
  processButton.addEventListener("click", processTask);

  updateTaskList();

  // 2.	Crea una matriz con 10 usuarios(nombre,edad), con una función filtra los usuarios mayores de edad creando una segunda matriz.
  // •	Imprime ambos matrices

  const users = [
    { nombre: "Julieta", edad: 15 },
    { nombre: "María", edad: 21 },
    { nombre: "Sofia", edad: 17 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Camila", edad: 19 },
    { nombre: "Jenn", edad: 16 },
    { nombre: "Luisa", edad: 25 },
    { nombre: "Laura", edad: 14 },
    { nombre: "Vanessa", edad: 31 },
    { nombre: "Isabel", edad: 28 },
  ];

  const userList = document.getElementById("userList");
  const adultUserList = document.getElementById("adultUserList");

  const updateList = (element, list) => {
    element.innerHTML = list
      .map((item) => `<li>${item.nombre}, ${item.edad} años</li>`)
      .join("");
  };

  const usersFilter = (users) => {
    return users.filter((user) => user.edad >= 18);
  };

  const adultUsers = usersFilter(users);
  updateList(userList, users);
  updateList(adultUserList, adultUsers);

  // 3.	Realiza los pedidos de un restaurante, dándole precio a cada artículo. Estos pedidos irán a una Matriz y al finalizar el día calcularemos lo que se realizo en total.
  // •	Cada pedido se imprimirá un mensaje que diga, su pedido ha sido tomado exitosamente

  const menu = [
    ["Pizza", 4],
    ["Hamburguesas", 6],
    ["Pastel de chocolate", 7],
    ["Tacos", 9],
  ];

  const orderButton = document.getElementById("orderButton");

  orderButton.addEventListener("click", function () {
    const orders = [];

    let pedidos = parseInt(prompt("Ingrese el número de pedidos"));

    while (pedidos !== 0) {
      let orderIndex = parseInt(
        prompt(
          "Seleccione un número del menú:\n\n1. Pizza : $4 \n2. Hamburguesas : $6 \n3. Pastel de chocolate : $7 \n4. Tacos : $9 \n0. Cancelar"
        )
      );

      if (orderIndex === 0) {
        alert("Pedido cancelado.");
        break; //cancelar
      }

      if (orderIndex >= 1 && orderIndex <= menu.length) {
        const selectedOrder = menu[orderIndex - 1];
        orders.push(selectedOrder);
        alert(`Su pedido de ${selectedOrder[0]} ha sido tomado exitosamente.`);
        pedidos--;
      } else {
        alert("Opción inválida. Por favor, seleccione un número del menú.");
      }
    }

    let total = 0;
    for (const order of orders) {
      total += order[1];
    }

    alert(`Total de ventas al final del día: $${total}`);
  });

  // 4.	Con la ayuda de .forEach le vamos a Incrementar la edad de todos los usuarios en un arreglo y modifica el arreglo original.

  const originalAgeList = document.getElementById("ageList");
  const incrementedAgeList = document.getElementById("ageListIncremented");

  let usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 28 },
  ];

  function updateAgeLists() {
    originalAgeList.innerHTML = usuarios
      .map((user) => `<li>${user.nombre}, Edad Original: ${user.edad}</li>`)
      .join("");

    const incrementedUsers = [];
    usuarios.forEach((user) => {
      incrementedUsers.push({ ...user, edad: user.edad + 1 });
    });

    incrementedAgeList.innerHTML = incrementedUsers
      .map((user) => `<li>${user.nombre}, Edad Incrementada: ${user.edad}</li>`)
      .join("");
  }

  updateAgeLists();

  // 5.	Utilizando el Dom crea una función que me agregue colores en una lista .

  const colors = [];
  const colorList = document.getElementById("colorList");
  const colorInput = document.getElementById("colorInput");
  const addColor = document.getElementById("addColor");

  const updateColorList = () => {
    colorList.innerHTML = colors
      .map(
        (color) =>
          `<li style="color: ${color}; background-color: #0002 ">${color}</li>`
      )
      .join("");
  };

  const addColorItem = () => {
    const newColor = colorInput.value.trim(); //valor sin espacios para asegurar el color correcto
    if (newColor !== "") {
      colors.unshift(newColor);
      const message = `Color agregado: ${newColor}`;
      showAlert(message, "alert-primary");
      updateColorList();
    }
    colorInput.value = ""; //input vacio
  };

  addColor.addEventListener("click", addColorItem);
});
