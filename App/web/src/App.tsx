import { useState, useEffect } from "react";
import { Form } from "./components/Form";

import axios from "axios";
import { Warn } from "./components/Warn";

export function App() {

    const [totalVacancies, setTotalVacancies] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3080/vacancies").then((response) => {
            const data = response.data;
            setTotalVacancies(data.vacanciesRemaining)
        });
    }, []);

    return (
        <div>
            {totalVacancies ?
            <Form/>
            : <Warn/>

            }
        </div>
    )
}
