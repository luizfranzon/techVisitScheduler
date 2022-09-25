import { X } from "phosphor-react"

import "./warn.css"

export function Warn() {
    return(
        <div className="warnDiv">
            <X size={70} weight="bold" />
            <p>Infelizmente não há mais vagas!</p>
        </div>
    )
}           