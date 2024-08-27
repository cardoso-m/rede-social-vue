<template>

    <span>

        <div class="row">
            <gridVue class="input-field" tamanho="12">
                <textarea v-model="conteudo" class="materialize-textarea"></textarea>
                <label >O que está acontecendo?</label>
            </gridVue>

            <p v-if="conteudo">
                <gridVue class="btn waves-effect waves-light" tamanho="2 offset-s10">Publicar</gridVue>
            </p>

        </div>

    </span>


</template>

<script>
import gridVue from '../layouts/gridVue.vue';

export default {
    name: 'feedConteudoVue',
    data() {
        return {
            conteudo:''
        }
    },
    components: {
        gridVue
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>