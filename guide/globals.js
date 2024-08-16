async function global() {
  //esto es para añadir una configuracion global
  //agregamos al header:
  axios.defaults.headers.common["informacion"] = "1234";

  const resUser = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(resUser);
  const resPost = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(resPost);
  //nada que agregar, verifiquen en los encabezados del network
  // veran una parte que dice informacion 1234
}

global();
