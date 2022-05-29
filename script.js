function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() //data atual
var hora = data.getHours() // hora atual
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
   //bom dia
   img.scr = 'manha.jpg'
   document.body.style.background = '#FFF8DC'
} else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#D2B48C'
}else  {
    //Boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#0F2F4F'
}


}

