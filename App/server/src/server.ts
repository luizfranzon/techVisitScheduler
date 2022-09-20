import express, { response } from "express";

const app = express();
const port = 3080;

app.get('/', (request, response) => {
    return response.send("dale")
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})
