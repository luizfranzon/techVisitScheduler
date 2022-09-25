import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();
const port = 3080;
const vacanciesAvailable = 12;

app.get("/vacancies", async (request, response) => {
    const vacanciesRemaining = await prisma.registeredPerson.findMany();
    return response.json({
        totalVacancies: vacanciesAvailable,
        vacanciesRemaining: vacanciesAvailable - vacanciesRemaining.length,
    });
});

app.post("/register", async (request, response) => {
    const vacanciesRemaining = await prisma.registeredPerson.findMany();
    const body = request.body;
    if (vacanciesAvailable - vacanciesRemaining.length > 0) {
        const person = await prisma.registeredPerson.create({
            data: {
                id: body.id,
                email: body.email,
                RGM: parseInt(body.RGM),
                telefone: body.telefone,
                semestre: parseInt(body.semestre.split("°")[0]),
                curso: body.curso,
                localEmbarque: body.localEmbarque,
            },
        });

        console.log("Nova vaga registrada!");
        return response.status(201).json({
            message: "Vaga registrada com sucesso!"
        });
    } else {
        console.log("Nova tentativa de registro, porém vagas esgotadas!");
        return response.status(200).json({
            message: "Vagas Esgotadas!"
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
