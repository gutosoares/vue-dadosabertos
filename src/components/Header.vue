<template>
  <header>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper container">
          <router-link to="/comissao" class="brand-logo center hide-on-med-and-down"><i class="material-icons">dashboard</i> Dados Abertos</router-link>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/comissao">Comissão</router-link></li>
            <li><router-link to="/deputado">Deputados</router-link></li>
          </ul>
          <div class="menu-mobile hide-on-large-only">
            <router-link to="/comissao" class="brand-logo left"><i class="material-icons">dashboard</i></router-link>
            <ul>
              <li><router-link to="/comissao">Comissão</router-link></li>
              <li><router-link to="/deputado">Deputados</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
header nav {
  background-color: #13293D;
}

header nav .brand-logo {
  color: #1de9c3;
  font-weight: 200;
}

.menu-mobile ul {
  margin-left: 40px;
}
</style>
