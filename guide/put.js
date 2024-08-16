function put() {
  //queremos actualizar los datos de un usuario:
  axios
    .patch("https://jsonplaceholder.typicode.com/users/1", {
      //en este caso vamos a actualizar:
      name: "ulises",
      username: "ruggeri",
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  //el problema con esto es que los datos se actualizan por ensima
  // de los demas, esto quiere decir que user/1 solo tendra los datos
  //id,name,username.
  //esto se puede solucionar utilizando el metodo patch en vez
  //de put, que actualiza solo los espacios especificados
}

put();
