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
import { eventBus } from '../main'; // eventBus 라는 개념을 통해서 자식간에 데이터를 공유할수 있음
import { dateFormat } from '../mixins/dateFormat'; // mixin 을 사용하기 위해서 임포트
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
    mixins : [dateFormat] //mixin을 사용하면 중복되는 코드를 줄일수 있음? 정확히 mixin 을 모르겠음...
}
</script>

<style scoped>
#user-detail-wrp{background-color: rosybrown;border:solid 1px gray;min-height: 10rem;;}
</style>