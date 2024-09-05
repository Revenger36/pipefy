const axios = require("axios");

// The Web App URL generated when you deploy your Google Apps Script
const url =
  "https://script.google.com/macros/s/AKfycbxAJppqnKzSJEK6QqucczQjqCa7qtqqJZz1RygU23ks3FQhJ3NJnZOUuhaksN0dZAQ4/exec";

// Data you want to send to the script
const data = {
  form_name: "OPERACAO",
  field1: "Value 1",
  field2: "Value 2",
};

// Convert data to a JSON string and URL encode it
const queryParams = `?data=${encodeURIComponent(JSON.stringify(data))}`;

function postTest() {
  axios;
  console
    .log(queryParams)
    .get(url + queryParams)
    .then((response) => {
      console.log("Resposta do Google Apps Script:", response.data);
    })
    .catch((error) => {
      console.error("Erro:", error.message);
    });
}

postTest();
