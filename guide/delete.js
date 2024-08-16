//uso pascal case porque delete es una funcion ya definida
//en javascript
function Delete() {
  //en este caso eliminamos a user con id 1.
  //no hace falta colocar un segundo parametro a delete
  axios
    .delete("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  //esto deja en la consola el objeto vacio data:{}
}

Delete();
