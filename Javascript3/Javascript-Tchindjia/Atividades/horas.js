const t = prompt("Digite o tempo (hh: mm : ss) : ");

const [hh , mm , ss] = t.split(":").map(Number);
const total = hh * 3600 + mm * 60 + ss

console.log = (` ${t} = ${total} segundos`);