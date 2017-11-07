<template>
    <div>
        <ul class="seul">
            <li v-for="(aa,index) in version">
                <a href="#" @click="active(index,aa.ver)" :class="{'sea':nowIndex===index}">{{aa.ver}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return {
            nowIndex:0
        }
    },
    props:{
        version:{
            type:Array
        }
    },
    methods:{
        active(index,ver){
            this.nowIndex=index
          
            this.$emit("on-change","{'ver':'"+ver+"'}")
           
        }
    }

}
</script>
<style scoped>
.seul a {

    padding: 4px 8px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    color: #000;
    cursor: pointer;
}
.seul li{
    display: inline-block;
    margin-right: 6px;
}
.seul .sea{
    background-color: #4fc08d;
    color: #fff;
    border: none;
}
</style>

