async function rt() {
  //usamos un request transform para concatenar datos
  const res = await axios.get("https://jsonplaceholder.typicode.com/users", {
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data = data.map((user) => {
        return {
          ...user,
          myCustomTitle: `${user.name}${user.email}${user.username}`,
        };
      });
      return data;
    }),
  });
  console.log(res);
  //en cada propiedad data tendria que haber una nueva
  //propiedad myCustomTitle que tenga los 3 valores de
  //nombre,email y apellido.

  //esto casi no se usa pero es bueno saber que existe.
}
rt();
