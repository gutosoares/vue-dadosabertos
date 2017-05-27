<template>
  <div id="app">
    <header>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper container">
          <router-link to="/comissao" class="brand-logo center">Dados Abertos</router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/comissao">Comissão</router-link></li>
            <li><router-link to="/deputado">Deputados</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>

<style>
body {
	background-color: rgba(242, 246, 247, 0.80);
  height: 1500px;
}

p {
  color: #444;
}

nav {
  background-color: #13293D;
}

nav .brand-logo {
  color: #1de9c3;
  font-weight: 200;
}
</style>
