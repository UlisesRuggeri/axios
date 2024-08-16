function getUsers() {
  //usamos la funcion axios({url,metodo});
  axios({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",

    //con lo anterior solo traiamos la informacion
    //usamos el metodo then(arrow function); para indicar que
    //hacer con esa informacion
  })
    .then((res) => {
      //accedemos a una informacion especifica:data que en este caso
      //seran solamente los 10 usuarios
      console.log(res.data);
    })
    //capturamos posible error y lo mostramos en consola
    .catch((err) => console.log(err));
}

getUsers();
