async function instancias() {
  //crea una configuracion basica de axios:
  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  //y con eso no tenemos que andar especificando la url
  const resUsers = await axiosInstance.get("/users/1");

  console.log(resUsers);

  const resPost = await axiosInstance.get("/posts/1");

  console.log(resPost);
}
instancias();
