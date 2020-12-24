<template>
  <div>
    <!-- <h1>All Users : {{$store.getters.allUsersCount}}</h1> -->     
    <!-- <h1>All Users : {{ allUsersCount }}</h1>          ...mapGetters({ 를 통해서 이렇게 바꿀수 있음 -->
    <h1>All Users : {{ count }}</h1>

    <!-- <h1>Seul Users : {{$store.getters.countOfSeoul}}({{$store.getters.percentOfSeoul}})%</h1> -->
    <!-- <h1>Seul Users : {{ countOfSeoul }}({{ percentOfSeoul }})%</h1> -->
    <h1>Seul Users : {{ seoul }}({{ percent }})%</h1>



    <!-- <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in $store.state.allUsers"       ...mapState(['allUsers'])를 통해서 아래와 같이 바꿀수 있다.
        :key="index"
        avatar
      > -->
    <v-list two-line>
      <v-list-tile 
        v-for="(user, index) in allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js';
import { mapState, mapGetters } from 'vuex';

  export default {
    data() {
      return {

      }
    },
    computed:{
      // ...mapGetters(['allUsersCount','countOfSeoul', 'percentOfSeoul'])
      ...mapGetters({
        count: 'allUsersCount',
        seouls : 'countOfSeoul',
        percent : 'percentOfSeoul',
      }),
      ...mapState(['allUsers'])
    },
    mounted() {
      EventBus.$on('signUp', users => {
        this.$store.state.allUsers.push(users)
      })
    }
  }
</script>
