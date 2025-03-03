function mostrarSecao(secao) {
    document.querySelectorAll('.secao').forEach(el => el.style.display = 'none');
    document.getElementById(secao).style.display = 'block';
}