import {createRouter} from 'vue-router'
import Overview from '../pages/Groceries/Overview.vue'
import Edit from '../pages/Groceries/Edit.vue'
import Create from '../pages/Groceries/Create.vue'


const routes = [
  { path: '/', component: Overview },
  { path: '/edit', component: Edit },
  { path: '/create', component: Create },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}