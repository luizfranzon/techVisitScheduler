import axios from "axios";
import { useState, useEffect, FormEvent } from "react";
import bannerImage from "./assets/banner.png";

export function App() {
    const [vacanciesRemaining, setVacanciesRemaining] = useState(0);
    const [totalVacancies, setTotalVacancies] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3080/vacancies").then((response) => {
            const data = response.data;
            console.log(data);
            setVacanciesRemaining(data.vacanciesRemaining);
            setTotalVacancies(data.totalVacancies);
        });
    }, []);

    function handleRegisterVacancie(event: FormEvent) {
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        axios.post("http://localhost:3080/register", data);
    }

    return (
        <div className="container">
            <div className="bannerDiv">
                <img className="banner" src={bannerImage} alt="" />
                <div>
                    <p className="vagasRestantes">
                        Vagas restantes {vacanciesRemaining}/{totalVacancies}
                    </p>
                </div>
            </div>

            <form id="form" className="form" onSubmit={handleRegisterVacancie}>
                <div className="inputDiv">
                    <label htmlFor="">
                        Nome completo<span>*</span>
                    </label>
                    <input name="nome" type="text" placeholder="Nome" required />
                </div>
                <div className="inputDiv">
                    <label htmlFor="">
                        E-mail<span>*</span>
                    </label>
                    <input type="text" name="email" placeholder="exemplo@email.com" required />
                </div>
                <div className="divGroup">
                    <div className="inputDiv">
                        <label htmlFor="">
                            RGM<span>*</span>
                        </label>
                        <input type="text" name="RGM" placeholder="12345678" required />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">
                            Telefone<span>*</span>
                        </label>
                        <input type="text" name="telefone" placeholder="(11) 9 12345678" required />
                    </div>
                </div>
                <div className="divGroup">
                    <div className="inputDiv">
                        <label htmlFor="">
                            Semestre<span>*</span>
                        </label>
                        <input
                            type="text"
                            name="semestre"
                            list="semestres"
                            pattern="1° Semestre|2° Semestre|3° Semestre|4° Semestre|5° Semestre|6° Semestre|7° Semestre|8° Semestre"
                            placeholder="Selecione"
                            required
                        />
                        <datalist id="semestres">
                            <option key="1° Semestre" value="1° Semestre" />
                            <option key="2° Semestre" value="2° Semestre" />
                            <option key="3° Semestre" value="3° Semestre" />
                            <option key="4° Semestre" value="4° Semestre" />
                            <option key="5° Semestre" value="5° Semestre" />
                            <option key="6° Semestre" value="6° Semestre" />
                            <option key="7° Semestre" value="7° Semestre" />
                            <option key="8° Semestre" value="8° Semestre" />
                        </datalist>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">
                            Curso<span>*</span>
                        </label>
                        <input
                            type="text"
                            name="curso"
                            list="cursos"
                            pattern="Automação Industrial|Análise e Desenvolvimento de sistemas|Ciência da Computação"
                            placeholder="Selecione"
                            required
                        />
                        <datalist id="cursos">
                            <option key="Automação Industrial" value="Automação Industrial" />
                            <option
                                key="Análise e Desenvolvimento de sistemas"
                                value="Análise e Desenvolvimento de sistemas"
                            />
                            <option key="Ciência da Computação" value="Ciência da Computação" />
                        </datalist>
                    </div>
                </div>
                <div className="inputDiv">
                    <label htmlFor="">
                        Local de embarque<span>*</span>
                    </label>
                    <input type="text" name="localEmbarque" list="locais" placeholder="Selecione" required />
                    <datalist id="locais">
                        <option key="CEUNSP - Salto" value="CEUNSP - Salto" />
                        <option key="CEUNSP - Itu" value="CEUNSP - Itu" />
                    </datalist>
                </div>
            </form>

            <button type="submit" form="form">
                Confirmar
            </button>
        </div>
    );
}
