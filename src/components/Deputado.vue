<template>
  <div class="deputado">
    <h1>Deputados</h1>
    <div class="row">
      <div class="col s12 l6 xl6">
        <div class="card">
          <div class="card-content">
            <span class="card-title">O Papel dos Deputados</span>
            <p>O Poder Legislativo cumpre papel imprescindível perante a sociedade do País, visto que desempenha três funções primordiais para a consolidação da democracia: representar o povo brasileiro, legislar sobre os assuntos de interesse nacional e fiscalizar a aplicação dos recursos públicos.</p>
            <br>
            <p>Nesse contexto, a Câmara dos Deputados, autêntica representante do povo brasileiro, exerce atividades que viabilizam a realização dos anseios da população, mediante discussão e aprovação de propostas referentes às áreas econômicas e sociais, como educação, saúde, transporte, habitação, entre outras, sem descuidar do correto emprego, pelos Poderes da União, dos recursos arrecadados da população com o pagamento de tributos.</p>
          </div>
          <div class="card-action">
            <a href="http://www2.camara.leg.br/a-camara/conheca" target="_blank">Saiba mais aqui</a>
          </div>
        </div>
      </div>
      <div class="col s12 l6 xl6">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Número de Deputados por Estado</span>
            <div class="row">
              <div class="col s6 m4 l5 xl4">
                <ul>
                  <li><div>Acre<span class="secondary-content right">8</span></div></li>
                  <li><div>Alagoas<span class="secondary-content right">9</span></div></li>
                  <li><div>Amazonas<span class="secondary-content right">8</span></div></li>
                  <li><div>Amapá<span class="secondary-content right">8</span></div></li>
                  <li><div>Bahia<span class="secondary-content right">39</span></div></li>
                  <li><div>Ceará<span class="secondary-content right">22</span></div></li>
                  <li><div>Distrito Federal<span class="secondary-content right">8</span></div></li>
                  <li><div>Espírito Santo<span class="secondary-content right">10</span></div></li>
                  <li><div>Goiás<span class="secondary-content right">17</span></div></li>
                </ul>
              </div>
              <div class="col s6 m4 l7 xl4">
                <ul>
                  <li><div>Maranhão<span class="secondary-content right">18</span></div></li>
                  <li><div>Minas Gerais<span class="secondary-content right">53</span></div></li>
                  <li><div>Mato Grosso do Sul<span class="secondary-content right">8</span></div></li>
                  <li><div>Mato Grosso<span class="secondary-content right">8</span></div></li>
                  <li><div>Pará<span class="secondary-content right">8</span></div></li>
                  <li><div>Paraíba<span class="secondary-content right">12</span></div></li>
                  <li><div>Pernambuco<span class="secondary-content right">25</span></div></li>
                  <li><div>Piauí<span class="secondary-content right">10</span></div></li>
                  <li><div>Paraná<span class="secondary-content right">30</span></div></li>
                </ul>
              </div>
              <div class="col s6 m4 l8 xl4">
                <ul>
                  <li><div>Rio de Janeiro<span class="secondary-content right">46</span></div></li>
                  <li><div>Rio Grande do Norte<span class="secondary-content right">8</span></div></li>
                  <li><div>Rondônia<span class="secondary-content right">8</span></div></li>
                  <li><div>Roraima<span class="secondary-content right">8</span></div></li>
                  <li><div>Rio Grande do Sul<span class="secondary-content right">31</span></div></li>
                  <li><div>Santa Catarina<span class="secondary-content right">16</span></div></li>
                  <li><div>Sergipe<span class="secondary-content right">8</span></div></li>
                  <li><div>São Paulo<span class="secondary-content right">70</span></div></li>
                  <li><div>Tocantins<span class="secondary-content right">8</span></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12">
        <div class="card card-search">
          <div class="card-content">
            <span class="card-title">Pesquise por Deputados na Legislação Atual</span>
            <div class="row">
              <div class="col s7 m8 l9">
                <select class="browser-default" v-model="sit">
                  <option value="" disabled selected>Selecione uma opção</option>
                  <option v-for="sit in sitList" :value=sit.id>{{ sit.name }}</option>
                </select>
                <label v-if="sit == ''">* Opção vazia</label>
              </div>
              <div class="col s5 m4 l3">
                <a class="waves-effect waves-light btn" type="submit" @click.prevent="searchDeputy()">Buscar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="show">
      <div class="col s12">
        <paginate name="searchResponse" :list="searchResponse" :per="5">
          <div class="card card-response center-align" v-for="element in paginated('searchResponse')">
            <div class="card-content valing-wrapper">
              <div class="row">
                <div class="col s4">
                  <p>Partido</p>
                  <h5>{{ element.partido }}</h5>
                </div>
                <div class="col s8">
                  <p>Deputado</p>
                  <h5>{{ element.nome }}</h5>
                </div>
              </div>
            </div>
          </div>
        </paginate>
        <paginate-links class="pagination center-align" for="searchResponse" :show-step-links="true" :limit="10"></paginate-links>
      </div>
    </div>
    <div class="row" v-if="!show">
      <div class="col s12">
        <span class="error">Nenhum dado foi encontrado.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deputado',
  data () {
    return {
      sitList: [
        { "id": 1, "name": 'Em Exercício' },
        { "id": 2, "name": 'Exerceu Mandato' },
        { "id": 3, "name": 'Renunciou' },
        { "id": 4, "name": 'Perdeu Mandato' },
      ],
      searchResponse: [],
      paginate: ['searchResponse'],
      sit: '',
      show: true
    }
  },
  methods: {
    searchDeputy() {
      this.$http.get('http://dadosabertos.almg.gov.br/ws/deputados/situacao/' + this.sit + '?formato=json')
      .then(response => {
        if(response.data.list == 0) {
          this.show = false
        } else {
          this.searchResponse = response.data.list
          this.show = true
        }
      })
      .catch(error => {
        if(error.status == 0) {
          alert('Seleciona uma opção valida!')
        }
      })
    }
  }
}
</script>

<style>
.card-content .secondary-content {
  color: #13c0a0;
}

.card-search .btn {
  margin: 4px 5px 0px;
  width: 100%;
  background-color: #13c0a0;
}

.card-search .btn:hover {
  background-color: #11dab5;
}

.card-response .card-content p {
  color: #13c0a0 !important;
  font-weight: 300;
}

.deputado .paginate-links.searchResponse {
  user-select: none;
  cursor: pointer;
}

.deputado .pagination li.active {
  background-color: #13c0a0 !important;
}
</style>
