import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods : {
    userWasEdited(date){
      this.$emit('userWasEdited', date);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
