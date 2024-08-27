<template>

  <loginTemplate>


    <span slot="menuesquerdo">
      <img src="https://fia.com.br/wp-content/uploads/2019/07/redes-sociais-numeros-no-mundo.jpg"
        class="responsive-img">
    </span>


    <span slot="principal">

      <span v-if="!cadastro">
        <h2>Login</h2>

        <input type="text" placeholder="E-mail">
        <input type="password" placeholder="Senha">
        <button class="btn">Entrar</button>
        <button class="btn blue" v-on:click="cadastro = !cadastro">Cadastre-se</button>
      </span>
      <span v-if="cadastro">
        <h2>Cadastrar</h2>

        <input type="text" placeholder="E-mail">
        <input type="text" placeholder="E-mail">
        <input type="password" placeholder="Senha">
        <input type="password" placeholder="Confirmar senha">
        <button class="btn">Enviar</button>
        <button class="btn blue" v-on:click="cadastro = !cadastro">Já tenho conta</button>
      </span>

    </span>


  </loginTemplate>




</template>

<script>
import loginTemplate from '../templates/loginTemplate.vue';

export default {
  name: 'login',
  data() {
    return {
      cadastro: true
    }
  },
  components: {
    loginTemplate,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>