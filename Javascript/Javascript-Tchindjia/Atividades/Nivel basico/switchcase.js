// switch

const dia = prompt("dia da semana (seg, ter, qua,.....):")

switch (dia){
    case "seg":
    case "ter":
    case "quar":
    case "qui":
    case "sex":
        console.log("Dia util")
        break;
        case "sab":
        case "dom":
            console.log("Fim de semana")

        default:
            console.log("Dia invalido")

        break;
}