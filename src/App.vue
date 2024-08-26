<template>
  <span>
    <header>
      <navbar logo='Social' url='#' cor='green accent-4' />
    </header>

    <main>

      <div class="container">
        <div class="row">
          <gridVue tamanho="4">
            <cardMenuVue>
              <div class="row valign-wrapper">
                <gridVue tamanho="4">
                  <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img">
                </gridVue>
                <gridVue tamanho="8">
                  <span class="black-text">
                    <h5>Matheus Cardoso</h5>
                    Add the "circle" class to it to make it appear circular.
                  </span>
                </gridVue>
              </div>

            </cardMenuVue>
            <cardMenuVue>
              teste
            </cardMenuVue>
          </gridVue>

          <gridVue tamanho="8">
            <router-view />
          </gridVue>
        </div>

      </div>

    </main>


    <footerVue cor="green accent-4" logo="Social" descricao="Teste de descrição" ano="2024">

      <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>

    </footerVue>
  </span>
</template>

<script>

import navbar from './components/layouts/navbar.vue';
import gridVue from './components/layouts/gridVue.vue';
import footerVue from './components/layouts/footerVue.vue';
import cardMenuVue from './components/layouts/cardMenuVue.vue';
import CardMenuVue from './components/layouts/cardMenuVue.vue';

export default {
  name: 'App',
  components: {
    navbar,
    gridVue,
    footerVue,
    cardMenuVue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
