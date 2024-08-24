<template>

    <span>

        <div v-if="imagem" class="card-image">
            <img :src="imagem">
            <span class="card-title">{{ titulo || 'Teste' }}</span>
        </div>
        <div v-if="descricao" class="card-content">
            <p>{{ descricao }}</p>
        </div>

    </span>

</template>

<script>

export default {
    name: 'cardDetalheVue',
    props: ['imagem', 'titulo', 'descricao'],
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>