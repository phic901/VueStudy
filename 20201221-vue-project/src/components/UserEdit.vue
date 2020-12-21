<template>
    
    <div id="user-edit-wrp">
        <h1>UserEdit.vue</h1>
        <p>수정사항</p>
        <div>
            <label>이름</label>
            <input type="text" v-model="user.name">
        </div>
        <div>
            <label>주소</label>
            <input type="text" v-model="user.address">
        </div>
        <div>
            <label>전화번호</label>
            <input type="text" v-model="user.phone">
        </div>            
        <div>
            <button @click="changeUser">수정완료</button>
        </div>
    </div>
    

</template>

<script>
import { eventBus } from '../main'
export default {
    props : ['name', 'address', 'phone', 'hasDog'],
    data(){
        return {
            user : {
                
            }
        }
    },
    created(){
        this.user.name  = this.name;
        this.user.address = this.address;
        this.user.phone = this.phone;
        this.user.hasDog = this.hasDog;
    },
    methods : {
        changeUser(){
            //console.log(this.user);
            this.$emit('child', this.user);
            //eventBus.$emit('userWasEdited', new Date());
            eventBus.userWasEdited(new Date());
        }
    }
}
</script>

<style scoped>
#user-edit-wrp{background-color: yellowgreen;min-height: 5rem;}
</style>