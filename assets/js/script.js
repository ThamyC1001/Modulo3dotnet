let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')
let nomeOk = false
let emailOk = false
let comentarioOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')

  if (nome.Value.length < 3) {
    txtNome.innerHTML = 'Poxa, Nome Inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Aee, Nome Válido'
    txtNome.style.color = 'green'
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#Email')

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'E-mail Válido'
    txtEmail.style.color = 'green'
  }
}
function validaComentario() {
  let txtComentario = document.querySelector('#Comentario')

  if (comentario.value.length >= 100) {
    txtComentario.innerHTML =
      'Comentario muito Grande bb , pode no maximo 100 caracteres'
    txtEmail.style.color = 'red'
    txtComentario.style.display = 'block'
  } else {
    txtComentario.style.display = 'none'
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('O formúlario foi enviado com sucesso, parabéns!!')
  } else {
    alert(
      'Algum campo foi preenchido incorretamente, verifique e tente denovo por favor'
    )
  }
}

function mapaZoom() {
  mapa.style.width = '600px'
  mapa.style.height = '375px'
}

function mapaNormal() {
  mapa.style.width = '400px'
  mapa.style.height = '250px'
}
