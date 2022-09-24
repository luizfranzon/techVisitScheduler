-- CreateTable
CREATE TABLE "registeredPerson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "RGM" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "semestre" INTEGER NOT NULL,
    "curso" TEXT NOT NULL,
    "localEmbarque" TEXT NOT NULL
);
