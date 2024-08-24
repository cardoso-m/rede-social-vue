<template>
    <div class="row">
        <div class="card">
            <div class="card-content">
                <div class="row valign-wrapper">
                    <gridVue tamanho="1">
                        <img :src="img_perfil" alt="nome" class="circle responsive-img">
                    </gridVue>
                    <gridVue tamanho="11">
                        <span class="black-text">
                            <strong>{{ nome }}</strong> - <small>{{ data }}</small>
                        </span>
                    </gridVue>
                </div>

            </div>

            <slot />

            <div class="card-action">
                <p>
                    <i class="material-icons">favorite_border</i>
                    <i class="material-icons">insert_comment</i>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import gridVue from '../layouts/gridVue.vue';

export default {
    name: 'cardConteudoVue',
    props: ['img_perfil', 'nome', 'data'],
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