<template>

    <div class="card">
        <div class="card-content">
            <div class="row valign-wrapper">
                <gridVue tamanho="1">
                    <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img">
                </gridVue>
                <gridVue tamanho="11">
                    <span class="black-text">
                        <strong>Matheus Cardoso</strong> - <small>19/08/2024 20:30</small>
                    </span>
                </gridVue>
            </div>

            <div class="card-image">
                <img src="https://materializecss.com/images/sample-1.jpg">
                <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
            </div>

        </div>

        <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
        </div>
    </div>

</template>

<script>
import gridVue from '../layouts/gridVue.vue';

export default {
    name: 'cardConteudoVue',
    props: [],
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