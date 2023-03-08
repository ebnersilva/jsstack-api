<h3 align="center">
  API de estudo desenvolvida no curso JSStack, ela serve dados como contatos e categorias
</h3>

<blockquote align="center">“Mude você e todo o resto mudará naturalmente”!</blockquote>

<p align="center">
  <a href="#features-adicionadas">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotas-da-aplica%C3%A7%C3%A3o">Rotas da aplicação</a>
</p>

## Features adicionadas

- [X] Configuração da estrutura inicial e banco de dados (Express e Postgres)
- [X] Schema das tabelas necessárias
- [X] Controller de Contatos (Crud completo)
- [X] Repositório de Contatos
- [X] Controller de Categorias (Crud completo)
- [X] Relacionamentos entre Contatos -> Categorias
- [X] Repositório de Categorias
- [X] Error Handler

## Rotas da aplicação

- **`GET /contacts`** - Lista todas os contatos
- **`GET /contacts/:id`** - Retorna o contato solicitada
- **`POST /contacts`** - Cria contato
- **`PUT /contacts/:id`** - Altera contato
- **`DELETE /contacts/:id`** - Deleta contato

- **`GET /contacts`** - Lista todas as categorias
- **`GET /contacts/:id`** - Retorna a categoria solicitada
- **`POST /contacts`** - Cria categoria
- **`PUT /contacts/:id`** - Altera categoria
- **`DELETE /contacts/:id`** - Deleta categoria

## 📋 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💜 by Ebner Silva :wave:
