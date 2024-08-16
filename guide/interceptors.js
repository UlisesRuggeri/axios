//este  concepto se puede utilizar cuando se esta trabajando en
//una aplicacion frontend que requiere autenticacion y queremos
//alterar los datos que enviamos al backend como por ejemplo
//añadir una coockie o algun token que este en local storage, cosas asi

async function interceptor() {
  //accedemos a la configuracion de axios en la consola del navegador

  axios.interceptors.request.use((config) => {
    console.log(config);
    config.url = "https://jsonplaceholder.typicode.com/posts/1";
    return config;
    //en este caso hacemos que la configuracion de la url no sea de user/1
    //sino de posts/1 lo que hace que en el console log de abajo donde se imprime
    //res esta mostrando el post
  });
  //pero tambien se puede utilizar para buscar informacion sobre algo como por ejemplo
  //cuando se ejecuto una consulta

  const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  console.log(res);
}

interceptor();
