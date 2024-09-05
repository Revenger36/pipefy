const axios = require("axios");
const qs = require("qs");

const data = {
  "De quanto você precisa": "25.000,00",
  "Qual o prazo do empréstimo": "12 meses",
  "Qual a marca do veículo que ficará em garantia": "Alfa romeo",
  "Qual o modelo do veículo": "teste",
  "Qual a placa do veículo": "teste",
  "Qual o motor do veículo": "teste",
  "De que ano é o veículo": "2009",
  "O veículo está quitado": "Sim",
  "Digite seu nome completo": "teste",
  "Qual sua data de nascimento": "25/05/1994",
  "Qual seu CPF": "100.443.356-52",
  "Qual o nome completo da sua mãe": "teste",
  "Qual seu endereço": "teste",
  "Agora digite seu CEP": "31007-003",
  "Qual e-mail deseja receber o resultado": "marcospemadina@gmail.com",
  "Digite seu celular": "(31) 99435-0859",
  "Qual sua atividade profissional": "teste",
  "Qual sua renda mensal aproximada": "teste",
  "Declaro que li e concordo com a política de privacidade": "Sim",
};

axios
  .post(
    "https://zcw9lnt5-3000.brs.devtunnels.ms/receive-data",
    qs.stringify(data), // Converte o objeto em URL encoded
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
  .then((response) => {
    console.log("Resposta:", response.data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
