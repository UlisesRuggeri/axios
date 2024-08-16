async function cancel() {
  //como hacer una peticion que se pueda cancelar antes de que llegue.
  //es decir "nosotros queremos hacer una peticion pero esto pued tomar demasiad
  //tiempo entonces la cancelamos"

  const controller = new AbortController();
  try {
    // :
    controller.abort();
    const res = await axios.post(
      "https://reqres.in/api/login",
      {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
      {
        signal: controller.signal,
      }
    );
    console.log(res);
  } catch (err) {
    // Capturamos el error, que podría ser debido a la cancelación
    if (axios.isCancel(err)) {
      console.log("Request canceled", err.message);
    } else {
      console.log("Error:", err);
    }
  }
}

cancel();
