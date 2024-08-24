<template>

  <span>

    <div class="row">
      <gridVue class="input-field" tamanho="12">
        <textarea id="textarea1" class="materialize-textarea"></textarea>
        <label for="textarea1">O que está acontecendo?</label>
      </gridVue>

      <p>
        <gridVue class="btn waves-effect waves-light" tamanho="2 offset-s10" >Publicar</gridVue>
      </p>
    </div>


    <cardConteudoVue img_perfil="https://materializecss.com/images/yuna.jpg" nome="Matheus Cardoso"
      data="21/08/2024 20:30">

      <cardDetalheVue imagem="https://materializecss.com/images/sample-1.jpg" titulo="" descricao="I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively." />

    </cardConteudoVue>

  </span>




</template>

<script>
import cardConteudoVue from '../components/social/cardConteudoVue.vue';
import cardDetalheVue from '../components/social/cardDetalheVue.vue';
import gridVue from '../components/layouts/gridVue.vue';

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    cardConteudoVue,
    cardDetalheVue,
    gridVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>