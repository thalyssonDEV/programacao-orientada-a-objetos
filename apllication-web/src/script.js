function bhaskara(a, b, c) {
    const delta = (b**2) - (4 * a * c);

    if (delta < 0) {
        return [null, null]; // Sem raízes reais
    } else if (delta == 0) {
        const x = -b / (2 * a);
        return [x,x]; // Apenas 1 raiz real
    }

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return [x1, x2]; // 2 raízes reais
}

function main() {
    document.getElementById('bhaskaraButton').addEventListener('click', () => {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);
        
        const tupleValuesBhaskara = bhaskara(a, b, c);
        const x1 = tupleValuesBhaskara[0];
        const x2 = tupleValuesBhaskara[1];

        if (x1 === null && x2 === null) {
            document.getElementById('message').innerText = 'No real roots';
        } else {
            document.getElementById('x1').innerText = x1.toFixed(3);
            document.getElementById('x2').innerText = x2.toFixed(3);
        }
    })
}

main();    