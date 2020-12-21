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
        <UserEdit
            :name="name" 
            :address="address"
            :phone="phone"
            :hasDog="hasDog"        
            @child="parent"
        />
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';
import { dateFormat } from '../mixins/dateFormat'; // mixin에 대해서
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
    mixins : [dateFormat]

}
</script>

<style scoped>
#user-wrp{background-color: powderblue;border:solid 1px gray;min-height: 15rem;}
</style>