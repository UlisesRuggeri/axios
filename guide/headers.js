//sirve para... añadir algo extra
async function headers() {
  //agrega ulises a inspect/network/1/headers

  const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
    headers: {
      ulises: "xyz123",
    },
  });
  console.log(res);
  // y si queremos traer un elemento usamos get
}
headers();
