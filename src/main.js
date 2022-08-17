import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Page from './components/UI/Page.vue';
import List from './components/UI/List/List.vue';
import ListItem from './components/UI/List/ListItem.vue';
import Card from './components/UI/Card.vue';
import Form from './components/UI/Form.vue';
import Btn from './components/UI/Btn.vue';
import TextLink from './components/UI/TextLink.vue';

const app = createApp(App);

app.component('appPage', Page);
app.component('appList', List);
app.component('appListItem', ListItem);
app.component('appCard', Card);
app.component('appForm', Form);
app.component('appBtn', Btn);
app.component('appTextLink', TextLink);

app.use(store).use(router).mount('#app')
