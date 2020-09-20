<template>
    <div id="terminal" :show="on">

    </div>
</template>

<script>
import '@/assets/css/terminal.css';

export default {
    name: 'Terminal',
    data () {
        return {};
    },
    prop: {
        on: {
            default: false,
            type: Boolean
        }
    }
}
</script>
