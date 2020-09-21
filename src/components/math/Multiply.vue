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
                    <div class="number-control">
                        <div class="label">{{settings.maxFactor.unit}}</div>
                        <div class="decrease" @click="settings.maxFactor.value -= settings.maxFactor.step">
                            <i class="icon-minus"></i>
                        </div>
                        <input type="number" min="settings.maxFactor.min" :value="settings.maxFactor.value" @focus="$event.target.select()">
                        <div class="increase" @click="settings.maxFactor.value += settings.maxFactor.step">
                            <i class="icon-plus"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="number-control">
                        <div class="label">{{settings.minFactor.unit}}</div>
                        <div class="decrease" @click="settings.minFactor.value -= settings.minFactor.step">
                            <i class="icon-minus"></i>
                        </div>
                        <input type="number" min="settings.minFactor.min" :value="settings.minFactor.value" @focus="$event.target.select()">
                        <div class="increase" @click="settings.minFactor.value += settings.maxFactor.step">
                            <i class="icon-plus"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="number-control">
                        <div class="label">{{settings.numberInOneFormula.unit}}</div>
                        <div class="decrease" @click="settings.numberInOneFormula.value -= settings.numberInOneFormula.step">
                            <i class="icon-minus"></i>
                        </div>
                        <input type="number" min="settings.numberInOneFormula.min" :value="settings.numberInOneFormula.value" @focus="$event.target.select()">
                        <div class="increase" @click="settings.numberInOneFormula.value += settings.maxFactor.step">
                            <i class="icon-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button-set">
                <button class="preview">
                    <span class="inner">Preview</span>
                </button>
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
                    step: 1,
                    unit: 'Max Factor',
                    value: 10
                },
                minFactor: {
                    step: 1,
                    unit: 'Min Factor',
                    value: 1
                },
                numberInOneFormula: {
                    step: 1,
                    unit: 'Number in one formula',
                    value: 2
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
