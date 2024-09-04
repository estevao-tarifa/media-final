document.getElementById('notasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const materias = ['mat', 'lpl', 'hst', 'filo', 'soci', 'fsc', 'qmc', 'geo', 'bio', 'red'];
    let resultados = '';
    let exameFinalResultados = '';

    materias.forEach(function(materia) {
        const nota1 = parseFloat(document.getElementById(`${materia}1`).value);
        const nota2 = parseFloat(document.getElementById(`${materia}2`).value);
        const nota3 = parseFloat(document.getElementById(`${materia}3`).value);
        
        const media = (nota1 + nota2 + nota3) / 3;
        let mediaClass = '';
        
        if (media < 7) {
            mediaClass = 'materia-baixa';
            const notaParaExameFinal = (25 - (nota1 + nota2 + nota3)) / 2;
            exameFinalResultados += `<p>${materia.toUpperCase()}: ${notaParaExameFinal.toFixed(2)}</p>`;
        }

        resultados += `<p class="${mediaClass}">${materia.toUpperCase()}: ${media.toFixed(2)}</p>`;
    });

    document.getElementById('resultados').innerHTML = resultados;
    document.getElementById('exameFinal').innerHTML = exameFinalResultados;
});
