import bannerImage from "./assets/banner.png";

export function App() {
    return (
        <div className="container">
            <img className="banner" src={bannerImage} alt="" />

            <form id="form" className="form" action="https://jkorpela.fi/cgi-bin/echo.cgi" method="POST">
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
                        <input type="text" name="semestre" list="semestres" placeholder="Selecione"/>
                        <datalist id="semestres">
                            <option key="1° Semestre" value="1° Semestre" />
                            <option key="1° Semestre" value="2° Semestre" />
                            <option key="1° Semestre" value="3° Semestre" />
                            <option key="1° Semestre" value="4° Semestre" />
                            <option key="1° Semestre" value="5° Semestre" />
                            <option key="1° Semestre" value="6° Semestre" />
                            <option key="1° Semestre" value="7° Semestre" />
                            <option key="1° Semestre" value="8° Semestre" />
                        </datalist>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="">
                            Curso<span>*</span>
                        </label>
                        <input type="text" name="curso" list="cursos" placeholder="Selecione"/>
                        <datalist id="cursos">
                            <option key="Automação Industrial" value="Automação Industrial" />
                            <option key="Analise e desenvolvimento de sistemas" value="Análise e Desenvolvimento de sistemas" />
                            <option key="Ciência da Computação" value="Ciência da Computação" />
                        </datalist>
                    </div>
                </div>
                <div className="inputDiv">
                    <label htmlFor="">
                        Local de embarque<span>*</span>
                    </label>
                    <input type="text" name="localEmbarque" list="locais" placeholder="Selecione"/>
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
