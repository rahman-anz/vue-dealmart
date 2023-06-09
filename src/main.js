import { createApp } from "vue";
import { createPinia } from "pinia";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import router from "./router.js";
import App from "./App.vue";
const pinia = createPinia();
const app = createApp(App);
app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.use(pinia);
app.use(router);
app.mount("#app");
