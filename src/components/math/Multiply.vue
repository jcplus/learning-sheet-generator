<template>
    <div class="container">
        <div class="pane-left">
            <div class="title">
                <h1>{{page.title}}</h1>
                <h2>{{page.subtitle}}</h2>
            </div>
            <div class="settings">
                <div class="row" :show-slider="settings.rows.showSlider">
                    <div class="cols-middle-side">
                        <div class="icon-sliders" @click="settings.rows.showSlider = !settings.rows.showSlider"></div>
                        <div class="value-holder cols-middle-side cols-grow">
                            <input type="text" inputmode="numeric" class="value cols-grow" :value="settings.rows.value">
                            <div class="unit">{{settings.rows.unit}}</div>
                        </div>
                    </div>
                    <div class="slider-holder">
                        <input type="range" class="slider" :min="settings.rows.min" :max="settings.rows.max" :value="settings.rows.value" @change="settings.rows.value = $event.target.value">
                    </div>
                </div>
                <div class="row" :show-slider="settings.columns.showSlider">
                    <div class="cols-middle-side">
                        <div class="icon-sliders" @click="settings.columns.showSlider = !settings.columns.showSlider"></div>
                        <div class="value-holder cols-middle-side cols-grow">
                            <input type="text" inputmode="numeric" class="value cols-grow" :value="settings.columns.value">
                            <div class="unit">{{settings.columns.unit}}</div>
                        </div>
                    </div>
                    <div class="slider-holder">
                        <input type="range" class="slider" :min="settings.columns.min" :max="settings.columns.max" :value="settings.columns.value" @change="settings.columns.value = $event.target.value">
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
                columns: {
                    max: 10,
                    min: 1,
                    unit: 'Columns',
                    showSlider: false,
                    value: 10
                },
                rows: {
                    max: 4,
                    min: 1,
                    showSlider: false,
                    unit: 'Rows',
                    value: 2
                },
            }
        }
    }
}
</script>

<style scoped>
</style>
