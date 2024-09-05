const express = require("express");
const axios = require("axios");
const qs = require("qs");
// const sheets = google.sheets("v4");
const { GoogleAuth } = require("google-auth-library");
// const rateioRoutes = require('./src_rateio/routes');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Função para enviar uma requisição POST com axios
function sendPostRequest() {
  const data = {
    form: { id: "983cce0", name: "New Form" },
    fields: {
      field_6346a95: {
        id: "field_6346a95",
        type: "step",
        title: "",
        value: "",
        raw_value: "",
        required: "0",
      },
      valor: {
        id: "valor",
        type: "maskmoney",
        title: "De quanto você precisa?",
        value: "25.000,00",
        raw_value: "25.000,00",
        required: "1",
      },
      prazo: {
        id: "prazo",
        type: "select",
        title: "Qual o prazo do empréstimo?",
        value: "12 meses",
        raw_value: "12 meses",
        required: "1",
      },
      field_72fa17b: {
        id: "field_72fa17b",
        type: "step",
        title: "",
        value: "",
        raw_value: "",
        required: "0",
      },
      marca: {
        id: "marca",
        type: "select",
        title: "Qual a marca do veículo que ficará em garantia?",
        value: "Alfa romeo",
        raw_value: "Alfa romeo",
        required: "1",
      },
      modelo: {
        id: "modelo",
        type: "text",
        title: "Qual o modelo do veículo?",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      field_c90a58a: {
        id: "field_c90a58a",
        type: "text",
        title: "Qual a placa do veículo?",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      motor: {
        id: "motor",
        type: "text",
        title: "Qual o motor do veículo?",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      ano: {
        id: "ano",
        type: "select",
        title: "De que ano é o veículo?",
        value: "2009",
        raw_value: "2009",
        required: "1",
      },
      quitado: {
        id: "quitado",
        type: "select",
        title: "O veículo está quitado?",
        value: "Sim",
        raw_value: "Sim",
        required: "1",
      },
      field_3d0dfa0: {
        id: "field_3d0dfa0",
        type: "step",
        title: "",
        value: "",
        raw_value: "",
        required: "0",
      },
      nome: {
        id: "nome",
        type: "text",
        title: "Digite seu nome completo",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      nascimento: {
        id: "nascimento",
        type: "maskdate",
        title: "Qual sua data de nascimento?",
        value: "25/05/1994",
        raw_value: "25/05/1994",
        required: "1",
      },
      cpf: {
        id: "cpf",
        type: "maskcpf",
        title: "Qual seu CPF?",
        value: "100.443.356-52",
        raw_value: "100.443.356-52",
        required: "1",
      },
      mae: {
        id: "mae",
        type: "text",
        title: "Qual o nome completo da sua mãe?",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      endereco: {
        id: "endereco",
        type: "text",
        title: "Qual o seu endereço?",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      cep: {
        id: "cep",
        type: "maskcep",
        title: "Agora digite seu CEP",
        value: "31007-003",
        raw_value: "31007-003",
        required: "1",
      },
      email: {
        id: "email",
        type: "email",
        title: "Qual e-mail deseja receber o resultado?",
        value: "marcospemadina@gmail.com",
        raw_value: "marcospemadina@gmail.com",
        required: "1",
      },
      celular: {
        id: "celular",
        type: "maskphone_with_ddd",
        title: "Digite seu celular",
        value: "(31) 99435-0859",
        raw_value: "(31) 99435-0859",
        required: "1",
      },
      profissao: {
        id: "profissao",
        type: "text",
        title: "Qual sua atividade profissional?",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      renda: {
        id: "renda",
        type: "text",
        title: "Qual sua renda mensal aproximada?",
        value: "teste",
        raw_value: "teste",
        required: "1",
      },
      field_b0cf1f5: {
        id: "field_b0cf1f5",
        type: "select",
        title: "Declaro que li e concordo com a política de privacidade.",
        value: "Sim",
        raw_value: "Sim",
        required: "1",
      },
    },
    meta: {
      date: { title: "Date", value: "5 de setembro de 2024" },
      time: { title: "Time", value: "14:07" },
      page_url: {
        title: "Page URL",
        value: "https://creditofacilconsultoria.com.br/",
      },
      user_agent: {
        title: "User Agent",
        value:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      },
      remote_ip: {
        title: "Remote IP",
        value: "2804:2488:7087:d980:3475:7a36:f532:c7d4",
      },
      credit: { title: "Powered by", value: "Elementor" },
    },
  };

  axios
    .post(
      "https://script.google.com/macros/s/AKfycbyVfKT4eY2YVGpbF8OU06AIs3oJ66QlLhl_GRVyah-1MhrGjyzT5dRj15_b7BqB3O37/exec",
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
}

app.post("/receive-data", (req, res) => {
  const formData = req.body;
  // Aqui você pode acessar os dados enviados
  console.log("Dados recebidos:", formData);

  // Retorna uma resposta ao cliente
  res.status(200).send("Dados recebidos com sucesso!");
});

const publicDir = path.join(
  "C:",
  "Users",
  "Evandro",
  "Desktop",
  "git",
  "pipefy",
  "public"
);

// Define a GET endpoint for '/manifest.json'
app.get("/manifest.json", (req, res) => {
  // Construct the full path to the manifest.json file
  const filePath = path.join(publicDir, "manifest.json");
  res.sendFile(filePath);
});

app.get("/index.html", (req, res) => {
  // Construct the full path to the manifest.json file
  const filePath = path.join(publicDir, "index.html");
  res.sendFile(filePath);
});

app.post("/pubsub", (req, res) => {
  const pubsubMessage = req.body.message;
  console.log(req.body);

  if (pubsubMessage) {
    // Decode base64-encoded message data
    const messageData = Buffer.from(pubsubMessage.data, "base64").toString(
      "utf-8"
    );

    console.log(`Received message: ${messageData}`);

    // Respond to acknowledge receipt
    res.status(200).send("Message received");
  } else {
    // Handle missing message data
    res.status(400).send("No message received");
  }
});

// app.use("/api/v1/rateio", rateioRoutes);

app.listen(port, () => console.log("Api online!"));
sendPostRequest();
