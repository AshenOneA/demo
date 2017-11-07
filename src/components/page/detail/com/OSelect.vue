<template>
    <div>
        <select class="osel" v-model="add">
            <option class="opt" v-for="aa in address" :value="aa.add">{{aa.add}}</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nowIndex: [],
            add:""
        }
    },
    props: {
        address: {
            address: Array
        }
    },
    mounted(){
        this.add=this.address[0]['add']
        this.$emit("on-change","{'add':'"+this.add+"'}")
        
    },
    watch:{
        add(add,oval){

            this.$emit("on-change","{'add':'"+add+"'}")
            
           
        }
    }

}
</script>
<style scoped>
.osel {
    outline: none;
    padding: 6px 10px;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    cursor: pointer;
}

</style>