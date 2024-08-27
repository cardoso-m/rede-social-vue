<template>
    <span>
        <header>
            <navbar logo='Social' url='/' cor='green accent-4'>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/login">Entrar</router-link></li>
            </navbar>
        </header>

        <main>

            <div class="container">
                <div class="row">
                    <gridVue tamanho="6">
                        <cardMenuVue>
                            <slot name="menuesquerdo" />
                        </cardMenuVue>
                    </gridVue>
                    <gridVue tamanho="6">
                        <slot name="principal" />
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

import navbar from '@/components/layouts/navbar.vue';
import gridVue from '@/components/layouts/gridVue.vue';
import footerVue from '@/components/layouts/footerVue.vue';
import cardMenuVue from '@/components/layouts/cardMenuVue.vue';

export default {
    name: 'loginTemplate',
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