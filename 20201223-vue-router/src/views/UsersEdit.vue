<template>
    <div>
        <h1>Users Edit</h1>
    </div>
</template>

<script>
export default {
    computed:{
        userId(){
            return this.$route.params.id
        }
    },

}
</script>