<template>
    <div id="app" class="show-terminal">
        <router-view/>
        <terminal></terminal>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped>
#app {
    background-image: url('./assets/background/bg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
