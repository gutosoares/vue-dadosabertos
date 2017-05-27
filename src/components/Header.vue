<template>
  <header>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper container">
          <router-link to="/comissao" class="brand-logo center"><i class="material-icons">dashboard</i> Dados Abertos</router-link>
          <a href="#" data-activates="menu-mobile" class="button-collapse right"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li class="active"><router-link to="/comissao">Comissão</router-link></li>
            <li><router-link to="/deputado">Deputados</router-link></li>
          </ul>
          <ul class="side-nav" id="menu-mobile">
            <li><router-link to="/comissao">Comissão</router-link></li>
            <li><router-link to="/deputado">Deputados</router-link></li>
          </ul>
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
nav {
  background-color: #13293D;
}

nav .brand-logo {
  color: #1de9c3;
  font-weight: 200;
}
</style>
