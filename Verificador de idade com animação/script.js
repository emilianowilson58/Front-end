function verificar() {
    var data = new Date()
    var ano = data.getFullYear() /*fullyear para pegar o ano vom 4 digitos */
   //  var ano = 2024
    var fano = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro:] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')// criar um img dinamico pelo js, vai criar uma tag img
        img.setAttribute('id', 'foto')// criando uma id para img

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-homem.png');// Chamada da imagem
            } else if(idade < 21) {
                img.setAttribute('src', 'jovem-homem.png');// Chamada da imagem
            }else if(idade < 50){
                img.setAttribute('src', 'adulto-homem.png');// Chamada da imagem
            }else{
                img.setAttribute('src', 'idoso-homem.png');// Chamada da imagem
            }

        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-mulher.png')// Chamada da imagem
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')// Chamada da imagem
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'aduta-mulher.png')// Chamada da imagem
            }else{
                img.setAttribute('src', 'idoso-mulher.png')// Chamada da imagem
                //idoso
            }
        }
        res.computedStyleMap.textAlign = 'center'// Para centralizar usando js
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)// para adicionar (um elemeto) a imagem a baixo
    }
}