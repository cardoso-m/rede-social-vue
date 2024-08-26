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
  
    </span>

  
  </template>
  
  <script>
  import gridVue from '../components/layouts/gridVue.vue';
  
  export default {
    name: 'home',
    data() {
      return {
  
      }
    },
    components: {
      gridVue
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>