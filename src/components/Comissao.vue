<template>
  <div class="comissao">
    <h1>Comissões</h1>
    <div class="row">
      <div class="col s12 m6">
        <div class="card commission-role">
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
        <div class="card commission-type">
          <div class="card-content">
            <span class="card-title">As comissões podem ser...</span>
            <ul>
              <li v-for="commissionType in listOfCommissionType">{{ commissionType.descricao }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Busque uma comissão em um determinado périodo de tempo</span>
            <div class="row">
              <div class="col s6">
                <label>Selecione Comissão</label>
                <select class="browser-default" v-model="searchProperties.commissionId">
                  <option value="" disabled selected>Selecione um opção</option>
                  <option v-for="commission in listOfCommission" :value=commission.id>{{ commission.nome }}</option>
                </select>
              </div>
              <div class="col s3">
                <label>Selecione Ano</label>
                <select class="browser-default" v-model="searchProperties.yearValue">
                  <option value="" disabled selected>Selecione um ano</option>
                  <option v-for="year in years">{{ year.value }}</option>
                </select>
              </div>
              <div class="col s3">
                <label>Selecione Mês</label>
                <select class="browser-default" v-model="searchProperties.monthValue">
                  <option value="" disabled selected>Selecione um mês</option>
                  <option v-for="month in months">{{ month.value }}</option>
                </select>
              </div>
            </div>
            <a class="waves-effect waves-light btn" type="submit" @click.prevent="searchCommission()">Buscar</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="searchResponse != ''">
      <div class="col s12">
        <div class="card" v-for="element in searchResponse">
          <div class="card-content">
            <div class="row">
              <div class="col s3 main-parliament">
                <p>Titular</p>
                <h5>{{ element.nomeParlamentarTitular }}</h5>
                <h6>{{ element.partidoDeputadoTitular }}</h6>
              </div>
              <div class="col s3 deputy-parliament">
                <p>Suplente</p>
                <h5>{{ element.nomeParlamentarSuplente }}</h5>
                <h6>{{ element.partidoDeputadoSuplente }}</h6>
              </div>
              <div class="col s6">
                <p class="date-commission">{{ searchProperties.monthValue }}/{{ searchProperties.yearValue }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col s12">
        <span class="error">Nenhum dado foi encontrado.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      searchProperties: {
        commissionId: '',
        yearValue: '',
        monthValue: ''
      },
      searchResponse: [],
      listOfCommissionType: [],
      listOfCommission: [
        { "id": 1, "nome": "Administração Pública" },
        { "id": 2, "nome": "Política Agropecuária e Agroindustrial" },
        { "id": 3, "nome": "Assuntos Municipais e Regionalização" },
        { "id": 4, "nome": "Turismo, Indústria e Comércio" },
        { "id": 5, "nome": "Constituição e Justiça" },
        { "id": 6, "nome": "Defesa do Consumidor" },
        { "id": 7, "nome": "Trabalho, da Previdência e da Ação Social" },
        { "id": 8, "nome": "Direitos Humanos" }
      ],
      years: [
        { "value": 2010 }, { "value": 2011 }, { "value": 2012 }, { "value": 2013 }, { "value": 2014 }, { "value": 2015 }, { "value": 2016 }, { "value": 2017 }, { "value": 2003 }
      ],
      months: [
        { "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }, { "value": 5 }, { "value": 6 }, { "value": 7 }, { "value": 8 }, { "value": 9 }, { "value": 10 }, { "value": 11 }, { "value": 12 }
      ]
    }
  },
  methods: {
    fetchTypeOfCommissionType() {
      this.$http.get('http://dadosabertos.almg.gov.br/ws/comissoes/tipos?formato=json').then(response => {
        this.listOfCommissionType = response.data.list
      })
    },
    searchCommission() {
      this.$http.get('http://dadosabertos.almg.gov.br/ws/comissoes/'+ this.searchProperties.commissionId +'/composicoes/'+ this.searchProperties.yearValue +'/'+ this.searchProperties.monthValue + '?formato=json').then(response => {
        this.searchResponse = response.data.list
        console.log(this.searchResponse)
      })
    }
  },
  created() {
    this.fetchTypeOfCommissionType()
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  padding-bottom: 20px;
  color: #444;
}

li:hover {
  color: #13c0a0;
}

.main-parliament p,
.deputy-parliament p {
  color: #13c0a0;
  font-weight: 200;
}

.main-parliament h5,
.deputy-parliament h5 {
  color: #444;
}

p.date-commission {
  float: right;
  margin: 70px 0px 0px 0px;
  color: #999;
  font-weight: 300;
}

.error {
  text-align: center;
  display: block;
  font-size: 28px;
  margin-top: 20px;
  color: #ccc;
}
</style>
