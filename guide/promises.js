async function promises() {
  //cuando estemos trabajando en una pagina queremos
  //pedir multiples datos al mismo tiempo para evitar
  //la carga (larga) de la pagina.
  //usamos funciones asincronas.

  //asignamos la URL a constantes
  const userURL = "https://jsonplaceholder.typicode.com/users";
  const postsURL = "https://jsonplaceholder.typicode.com/posts";

  //obtenemos el elemente con get pero no de la siguiente forma:

  //const resUsers = await axios.get(userURL);
  //const postUsers = await axios.get(postsURL);

  Promise.all([axios.get(userURL), axios.get(postsURL)])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  //imprimimos por consola los dos objetos que representan
  //los 10 usuarios y los 100 posts
}

promises();
