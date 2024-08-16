function post() {
  //enviamos los dattos email y password a la pagina en cuestion
  axios
    .post("https://reqres.in/api/register", {
      //los datos deben enviarse directamente con este metodo
      email: "eve.holt@reqres.in",
      password: "pistol",
    }) //response an cath error:
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

post();

/*deberia retornar:
{
    "id": 4,
    "token": "QpwL5tke4Pnpja7X4"
}
desde la pagina.
ademas de otros datos*/
