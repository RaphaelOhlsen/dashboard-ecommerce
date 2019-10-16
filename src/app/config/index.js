const api = (process.env.PUBLIC_UR)
  ? "https://api.loja-teste.ampliee.com" 
  : "http://localhost:3000";

const versao = "v1"

export { api, versao}
