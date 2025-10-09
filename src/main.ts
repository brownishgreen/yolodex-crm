import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch, faPlus, faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faSearch, faPlus, faFileCsv)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.mount('#app')
