document.addEventListener('DOMContentLoaded', () => {
    const blocoDeNotas = document.getElementById('blocoDeNotas');
    const btnLimparNotas = document.getElementById('btnLimparNotas');
    const btnSalvarNotas = document.getElementById('btnSalvarNotas');

    btnLimparNotas.addEventListener('click', () => {
        blocoDeNotas.value = '';
        localStorage.removeItem('minhaNota');
        console.log("Notas limpas e removidas do localStorage");
    });

    // Carrega a nota salva ao carregar a página
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
        blocoDeNotas.value = notaSalva;
    }

    // Salva a nota SOMENTE ao clicar no botão
    btnSalvarNotas.addEventListener('click', () => {
        localStorage.setItem('minhaNota', blocoDeNotas.value);
        console.log("Nota salva no localStorage!");
    });
});
