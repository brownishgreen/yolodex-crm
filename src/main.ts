import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch, faPlus, faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faSearch, faPlus, faFileCsv)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
