<template>

    <nav :class="cor">
        <div class="nav-wrapper container">
            <a :href="url || '#'" class="brand-logo">{{ logo || 'Site' }}</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
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