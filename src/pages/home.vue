<template>


  <siteTemplate>

    <span slot="menuesquerdo">
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
    </span>

    <span slot="principal">
      <cardConteudoVue img_perfil="https://materializecss.com/images/yuna.jpg" nome="Matheus Cardoso"
        data="21/08/2024 20:30">

        <cardDetalheVue imagem="https://materializecss.com/images/sample-1.jpg" titulo="" descricao="I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively." />

      </cardConteudoVue>
    </span>

    <feedConteudoVue />

  </siteTemplate>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue';
import cardConteudoVue from '../components/social/cardConteudoVue.vue';
import cardDetalheVue from '../components/social/cardDetalheVue.vue';
import gridVue from '../components/layouts/gridVue.vue';
import feedConteudoVue from '../components/social/feedConteudoVue.vue';


export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    siteTemplate,
    cardConteudoVue,
    cardDetalheVue,
    gridVue,
    feedConteudoVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>