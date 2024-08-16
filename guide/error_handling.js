async function EH() {
  //en esta seccion cuando el axios hace una peticion
  //y el backend o el servidor nos responde con un error
  //como por ejemplo el error 404.
  await axios
    .get("https://jsonplaceholder.typicode.com/userss")
    .then((res) => console.log(res))
    .catch((err) => {
      if (err.response.status) {
        console.log(`error: ${err.response.status}`);
      }
    });
  //podemos manejar y traer informacion especifica e incluso
  //colocar condi
}

EH();
