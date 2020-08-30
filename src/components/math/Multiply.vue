<template>
    <div class="container">
        <div class="pane-left">
            <div class="title">
                <h1>{{page.title}}</h1>
                <h2>{{page.subtitle}}</h2>
            </div>
            <div class="settings">
                <div class="row">
                    <div class="cols-middle-left">
                        <div class="label">{{settings.rows.value}}</div>
                        <div class="unit">{{settings.rows.unit}}</div>
                    </div>
                    <div class="slider-holder">
                        <input type="range" class="slider" :min="settings.rows.min" :max="settings.rows.max" :value="settings.rows.value" @input="settings.rows.value = $event.target.value">
                    </div>
                </div>
                <div class="row">
                    <div class="cols-middle-left">
                        <div class="label">{{settings.columns.value}}</div>
                        <div class="unit">{{settings.columns.unit}}</div>
                    </div>
                    <div class="slider-holder">
                        <input type="range" class="slider" :min="settings.columns.min" :max="settings.columns.max" :value="settings.columns.value" @input="settings.columns.value = $event.target.value">
                    </div>
                </div>
                <div class="row">
                    <div class="label">{{settings.maxFactor.unit}}</div>
                    <div class="value-holder">
                        <input type="text" inputmode="numeric" min="settings.maxFactor.min">
                    </div>
                </div>
            </div>
        </div>
        <div class="pane-right"></div>
    </div>
</template>

<script>
export default {
    name: 'Multiply',
    data () {
        return {
            page: {
                subtitle: 'Multiplication',
                title: 'Math'
            },
            settings: {
                maxFactor: {
                    unit: 'Max Factor',
                    value: 10
                },
                columns: {
                    max: 4,
                    min: 1,
                    unit: 'Columns',
                    value: 4
                },
                rows: {
                    max: 10,
                    min: 1,
                    unit: 'Rows',
                    value: 10
                },
            }
        }
    }
}
</script>

<style scoped>
</style>
