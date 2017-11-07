<template>
  <div>
      <h3>请选择银行</h3>
     <ul>
       <li v-for="(nn,index) in banks" :class="[nn.name,{'light':index===nowIndex?true:false}]" @click="light(index)"> </li>
     </ul>
       <a href="#" class="buy" @click="payShow2">立即购买</a>
  </div>
</template>
<script>
   export default{
        data(){
           return {
               nowIndex:0,
               banks:[
                   {
                       name:"zhaoshang"
                   },
                    {
                       name:"jianshe"
                   },
                    {
                       name:"pufa"
                   },
                    {
                       name:"jiaotong"
                   },
                    {
                       name:"minsheng"
                   },
                    {
                       name:"pingan"
                   },
                    {
                       name:"beijing"
                   },
                    {
                       name:"xingye"
                   }
               ]
           }
       },
       methods:{
           light(aa){
               this.nowIndex=aa
           },
           payShow2(){
               console.log(22)
               this.$emit("pay-show2")
           }
       }
   } 
</script>
<style scoped>
ul li{
    width: 120px;
    height: 38px;
    display: inline-block;
    background:url(./banks.png) no-repeat;
    margin:5px;
    border: 1px solid #e4e4e4;
    cursor:pointer;
}
.light{
    border: 1px solid #4fc08d;
}
.zhaoshang {
    background-position: -2160px 0;
}
.jianshe {
    background-position: -720px 0;
}
.pufa {
    background-position: -1800px 0;
}
.jiaotong {
    background-position: -3120px 0;
}
.minsheng {
    background-position: -2760px 0;
}
.pingan {
    background-position: -2400px 0;
}
.beijing {
    background-position: -960px 0;
}
.xingye {
    background-position: 0 0;
}
.buy {
  display: inline-block;
  width: 98px;
  height: 34px;
  background-color: #4fc08d;
  color: #fff;
  text-align: center;
  line-height: 34px;
}
</style>

