<template>
  <div class="comissao">
    <h1>Comissões</h1>
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-content">
            <span class="card-title">O Papel das Comissões</span>
            <p>O Congresso Nacional é composto de duas Casas: Câmara dos Deputados e Senado Federal. Cada uma dessas Casas possui Comissões Parlamentares, Permanentes ou Temporárias, com funções legislativas e fiscalizadoras, na forma definida na Constituição Federal e nos seus Regimentos Internos.</p>
            <br>
            <p>No cumprimento dessas duas funções básicas, de elaboração das leis e de acompanhamento das ações administrativas, no âmbito do Poder Executivo, as Comissões promovem, também, debates e discussões com a participação da sociedade em geral, sobre todos os temas ou assuntos de seu interesse.</p>
          </div>
          <div class="card-action">
            <a href="http://www2.camara.leg.br/atividade-legislativa/comissoes/o-papel-das-comissoes">Saiba mais aqui</a>
          </div>
        </div>
      </div>
      <div class="col s12 m6">
        <div class="card">
          <div class="card-content">
            <span class="card-title">As reuniões de comissão podem ser</span>
            <ul>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
              <li>teste</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 36px;
  text-align: center;
}

.card {
  background-color: #f9f9f9;
}

.card .card-title {
  color: #13c0a0;
}

.card p {
  color: #444;
  line-height: 24px;
}

.card .card-action a {
  color: #13c0a0 !important;
}

ul {
  list-style-type: none;
}

li {
  padding-bottom: 20px;
  color: #444;
  font-size: 18px;
}

li:hover {
  color: #13c0a0;
}
</style>
