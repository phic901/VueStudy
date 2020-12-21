<template>
    
    <div id="user-detail-wrp">
        <h1>UserDetail.vue</h1>
        <p>자세한 회원정보를 확인합니다.</p>
        <p>name : {{name}}</p>
        <p>address : {{address}}</p>
        <p>phone : {{phone}}</p>
        <p>hasDogKr : {{hasDogKr}}</p>
        <p>수정일자 : {{ getDateAndTime(editedDate) }}</p>
    </div>

</template>

<script>
import { eventBus } from '../main';
import { dateFormat } from '../mixins/dateFormat';
export default {
    data(){
        return {
            editedDate : null,
        }
    },
    props : ['name', 'address', 'phone', 'hasDog'],
    computed : {
        hasDogKr(){
            return this.hasDog === true ? '있음' : '없음'
        }
    },
    created(){
        eventBus.$on('userWasEdited', (date) => {
            this.editedDate = date;
        })
    },
    methods : {
        // getDateAndTime(date){
        //     if(date !== null){
        //         let hour = date.getHours();
        //         let minutes = date.getMinutes();
        //         let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        //         return `${fullDate} ${hour}:${minutes}`;
        //     }else{
        //         return null;
        //     }

        // }
    },
    mixins : [dateFormat]
}
</script>

<style scoped>
#user-detail-wrp{background-color: rosybrown;border:solid 1px gray;min-height: 10rem;;}
</style>