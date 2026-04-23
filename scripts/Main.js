function saudacao() {
    alert("clicado")
}


document.getElementById("btn-entrar").addEventListener('click', function(event) {
    window.location.href='home-page.html';
    event.preventDefault();
})
