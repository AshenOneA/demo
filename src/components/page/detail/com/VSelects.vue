<template>
    <div>
        <ul class="seul">
            <li v-for="(aa,index) in type">
                <a href="#" @click="active(aa.ty)" :class="{'sea':nowIndex.indexOf(aa.ty)===-1?false:true}">{{aa.ty}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return {
            nowIndex:[],
            sendIndex:{
                ty:[]
                }
        }
    },
    props:{
        type:{
            type:Array
        }
    },
    methods:{
        active(index){
            
            if(this.nowIndex.indexOf(index)===-1){
                this.nowIndex.push(index)
                }else{
                    let ind=this.nowIndex.indexOf(index)
                    this.nowIndex.splice(ind,1)
                     }
                     this.sendIndex.ty=[]
            for(let i=0;i<this.nowIndex.length;i++){
                this.sendIndex.ty.push(''+this.nowIndex[i])
            }
                // let aaaaa=[1,2,3,4,5,6]
                // console.log(aaaaa)
                // console.log(typeof aaaaa)
                // console.log(this.sendIndex.ty)
                // console.log(typeof this.sendIndex)
            this.$emit("on-change",this.sendIndex)
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