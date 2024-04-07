export const BaseService = async ({ apiUrl, method = "Get", body = null }) => {
  try {
    const respose = await fetch(`${process.env.API_URL}/${apiUrl}`, {
      method: method || "Get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ClientId: process.env.ClientId,
        ClientSecret: process.env.ClientSecret,
      },
      body: method == "Get" ? body : null,
    });
    const result = await respose.json();
    return result;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};
