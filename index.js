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
});

// 3.	Realiza los pedidos de un restaurante, dándole precio a cada artículo. Estos pedidos irán a una Matriz y al finalizar el día calcularemos lo que se realizo en total.
// •	Cada pedido se imprimirá un mensaje que diga, su pedido ha sido tomado exitosamente

// 4.	Con la ayuda de .forEach le vamos a Incrementar la edad de todos los usuarios en un arreglo y modifica el arreglo original.
// let usuarios = [
//  { nombre: 'Juan', edad: 25 },
//  { nombre: 'María', edad: 30 },
//  { nombre: 'Pedro', edad: 28 }
// ];

// 5.	Utilizando el Dom crea una función que me agregue colores en una lista .  En el navegador debe quedar algo asi
