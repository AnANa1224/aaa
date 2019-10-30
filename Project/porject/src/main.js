import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Edit from './views/Edit.vue'
import Add from './views/Add.vue'
import router from './router'
import store from './store'
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  data:{

  },
  mounted(){

  },
  methods:{
    edit(){
      alert('edit')
    },
    del(){
      alert('del')
    },
  },
  router,
  // store,
  render: h => h(App)
})
