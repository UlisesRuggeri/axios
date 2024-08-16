async function timeOut() {
  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    //tambien podemos colocar un timeout en la instancia
  });
  //podemos especificar un tiempo limite en el que se estan intentando traer
  //ciertos datos.

  const resUsers = await axiosInstance.get("/users/1", {
    timeout: 200, //200 milisegundos como maximo (pasa la prueba y la siguiente explota como un creeper)
  });
  console.log(resUsers);

  const resPost = await axiosInstance.get("/posts/1", {
    timeout: 20, //con 20 milisegundos
  });
  console.log(resPost);
}

timeOut();
