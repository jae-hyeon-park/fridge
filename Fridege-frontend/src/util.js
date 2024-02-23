const makeOptions = (method, body) => {
    return {
      method : method,
      headers: {
        "Content-Type": "application/json",
      },
      body : body,
    };
}

export default makeOptions