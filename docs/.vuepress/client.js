import { defineClientConfig } from '@vuepress/client'
import Figures from './components/Figures.vue'
export default defineClientConfig({
    enhance({ app }) {
        app.component('Figures', Figures)
    },
    setup() { },
    layouts: {},
    rootComponents: [],
})