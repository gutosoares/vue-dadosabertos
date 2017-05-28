<template>
  <div id="app">
    <app-header></app-header>
    <main class="container">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header
  },
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
}

h1,
h5,
h6,
p {
  color: #444;
}

h1 {
  font-weight: normal;
  font-size: 36px;
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

.btn {
  background-color: #13c0a0;
}

.btn:hover {
  background-color: #11dab5;
}

.error {
  text-align: center;
  display: block;
  font-size: 28px;
  margin-top: 20px;
  color: #ccc;
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
