class ContactController {
  index(request, response) {
    response.send('Send From Contact Controller')
  }

  show() {
    // Exibir
  }

  store() {
    // Criar
  }

  update() {
    // Atualizar
  }

  delete() {
    // Deletar
  }
}

module.exports = new ContactController();
