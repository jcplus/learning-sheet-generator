<template>
    <div id="app" class="show-terminal">
        <router-view/>
        <terminal :on="terminalOn"></terminal>
    </div>
</template>

<script>
export default {
    name: 'App',
    date () {
        return {
            terminalOn: false
        }
    }
}
</script>

<style scoped>
#app {
    background-image: url('./assets/background/bg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
