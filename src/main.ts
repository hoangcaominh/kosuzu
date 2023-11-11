import { createApp } from "vue"
import { createPinia } from "pinia"

// PrimeVue stuffs
import PrimeVue from "primevue/config"
import ToastService from "primevue/toastservice"


import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)

// PrimeVue stuffs
app.use(PrimeVue)
app.use(ToastService)

app.mount("#app")
