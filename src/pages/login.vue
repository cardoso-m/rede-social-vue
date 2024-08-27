<template>

  <loginTemplate>


    <span slot="menuesquerdo">
      <img src="https://fia.com.br/wp-content/uploads/2019/07/redes-sociais-numeros-no-mundo.jpg" class="responsive-img">
    </span>


    <span slot="principal">
      <h2>Login</h2>

      <input type="text" placeholder="E-mail">
      <input type="password" placeholder="Senha">
      <button class="btn">Entrar</button>
    </span>


  </loginTemplate>




</template>

<script>
import cardConteudoVue from '../components/social/cardConteudoVue.vue';
import cardDetalheVue from '../components/social/cardDetalheVue.vue';
import gridVue from '../components/layouts/gridVue.vue';
import feedConteudoVue from '../components/social/feedConteudoVue.vue';
import loginTemplate from '../templates/loginTemplate.vue';

export default {
  name: 'login',
  data() {
    return {

    }
  },
  components: {
    loginTemplate,
    cardConteudoVue,
    cardDetalheVue,
    gridVue,
    feedConteudoVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>