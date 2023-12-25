function changeClass(){
    if (document.getElementById('modo').className == 'light'){
        document.getElementById('modo').className = 'dark';
        document.getElementById('imagem').className = 'inverter';
        document.getElementById('input').className = 'input-dark'
        document.getElementById('input').value = 'adicione o Light Mode'
    } else {
        document.getElementById('modo').className = 'light';
        document.getElementById('imagem').className = 'normal';
        document.getElementById('input').className = 'input-light'
        document.getElementById('input').value = 'adicione o Dark Mode'
    }
}

