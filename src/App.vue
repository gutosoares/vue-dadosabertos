<template>
  <div id="app">
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
    <main class="container">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
$(".button-collapse").sideNav();

export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>
<style>
/* Global Style */
body {
	background-color: rgba(242, 246, 247, 0.80);
  height: 1500px;
}

h1 {
  font-weight: normal;
  font-size: 36px;
  color: #444;
}

.card {
  background-color: #f9f9f9;
}

.card .card-title {
  color: #13c0a0;
}

.card p {
  line-height: 24px;
}

.card .card-action a {
  color: #13c0a0 !important;
}

p {
  color: #444;
}

.btn {
  background-color: #13c0a0;
}

.btn:hover {
  background-color: #11dab5;
}

/* Header Style */
nav {
  background-color: #13293D;
}

nav .brand-logo {
  color: #1de9c3;
  font-weight: 200;
}

/* Animations Style */
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
      transform: translateY(-30px);
      opacity: 0;
  }
  to {
      transform: translateY(0);
      opacity: 1;
  }
}

@keyframes slide-out {
  from {
      transform: translateY(0);
      opacity: 1;
  }
  to {
      transform: translateY(-30px);
      opacity: 0;
  }
}
</style>
