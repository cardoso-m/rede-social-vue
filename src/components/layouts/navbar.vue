<template>

    <nav :class="cor">
        <div class="nav-wrapper container">
            <router-link :to="url || '/'" class="brand-logo">{{ logo || 'Site' }}</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <slot />
            </ul>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'navbar',
    props: ['logo', 'url', 'cor'],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>