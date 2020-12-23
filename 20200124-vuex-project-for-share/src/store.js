import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  //computed 랑 비슷함
  getters : {
    //function(state){ 같이 스테이트를 쓰곘다고 알려줘야함
    allUsersCount : function(state){
      return state.allUsers.length;
    }
    /**
     * allUsersCount : state => {
     *  return state.allUsers.length; 위랑 같음
     * }
     */

  },
  mutations: {

  },
  actions: {

  }
})
