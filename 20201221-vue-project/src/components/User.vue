<template>
    
    <div id="user-wrp">
        <h1>User.vue</h1>
        <p>{{ getDateAndTime(createdAt) }}</p>
        <b>name : {{ name }}</b>
        <button @click="changeName">이름변경버튼</button>
        <UserDetail 
            :name="name" 
            :address="address"
            :phone="phone"
            :hasDog="hasDog"
        />

        <!-- 왼쪽이 자식(:) 오른쪽이 부모의 변수 -->
        <UserEdit
            :name="name" 
            :address="address"
            :phone="phone" 
            :hasDog="hasDog"        
            @child="parent"
        />
         <!-- 
             @child="parent" 의미
             UserEdit 컴포넌트 에서 child 함수가 존재하는데 
             child 함수내부에서 this.$emit('child', this.user); 을 통하여 부모함수에서 @child 함수를 리슨하고 있다가
             호출되면 parent 함수를 호출함.
            child 함수내부에서 this.$emit('child', this.user); 로 호출하면 parent에 argument로 this.user를 받음
         -->

    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';
import { dateFormat } from '../mixins/dateFormat'; // mixin 을 사용하기 위해서 임포트
export default {
    data(){
        return {
            name : 'Hoza',
            address : 'Seoul',
            phone : '1234-5678',
            hasDog : true,
            createdAt : null,
        }
    },
    created(){
        this.createdAt = new Date();
    },
    components : {
        UserDetail,
        UserEdit
    },
    methods  : {
        changeName(){
            this.name = '배한희';
        },
        parent(user){
            console.log('부모가 받았다.');
            this.name = user.name;
            this.address = user.address;
            this.phone = user.phone;
            this.hasDog = user.hasDog;
        },
        // getDateAndTime(date){
        //     let hour = date.getHours();
        //     let minutes = date.getMinutes();
        //     let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        //     return `${fullDate} ${hour}:${minutes}`;
        // }
    },
    mixins : [dateFormat] //mixin을 사용하면 중복되는 코드를 줄일수 있음? 정확히 mixin 을 모르겠음...

}
</script>

<style scoped>
#user-wrp{background-color: powderblue;border:solid 1px gray;min-height: 15rem;}
</style>