<template>
    <div class="main">
        <div class="left1">
            <img :src="routerPath" alt="" class="img">
            <ul class="ul">
                <router-link tag="li" v-for="aaa in lis" :to="{path:aaa.link}" active-class="on" :key="aaa.oData">{{aaa.oData}}</router-link>
            </ul>
        </div>
        <router-view @pay-show="payS($event)"></router-view>
    </div>
</template>
<script>

export default {
    data() {
        return {
            lis:[
                {
                    oData: "数据统计",
                    link: "count",
                    img:require("../../assets/images/1.png")
                },
                {
                    oData: "数据预测",
                    link: "forecast",
                    img:require("../../assets/images/2.png")
                },
                {
                    oData: "流量分析",
                    link: "analysis",
                    img:require("../../assets/images/3.png")
                },
                {
                    oData: "广告发布",
                    link: "advertising",
                    img:require("../../assets/images/4.png")
                }
            ],
        imgs:{
            '/detail/count':require("../../assets/images/1.png"),
            '/detail/forecast':require("../../assets/images/2.png"),
            '/detail/analysis':require("../../assets/images/3.png"),
            '/detail/advertising':require("../../assets/images/4.png")
        }
        }
    },
    computed:{
        routerPath(){
      return this.imgs[this.$route.path]
        }
    },
    
   methods:{
       payS(shop){
          this.$emit("pay-show",shop)
       }
   }
}
</script>
<style>
*{
    box-sizing: border-box;
}
.main {
    width: 1200px;
   
    margin: 20px auto 0;
    position: relative;
}


.main:after{
    content:"";
    display: block;
    clear: both;
}

.left1 {
    float: left;
    width: 200px;
    height: 300px;
    background-color: #fff;
    position: relative;
}
.left1 img{
   position: absolute;
   left: 50%;
   margin-left: -50px;
   margin-top: 20px;
}
.left1 ul{
    padding-top: 140px ;
    line-height: 35px;
    color: #444;
}
.left1 ul li{
    padding-left: 14px;
    cursor: pointer;
   height: 35px;
}
.left1 ul li:hover,.on{
    background-color: #4fc08d;
    color: #fff;
}
.right1{
   float: right;
    width: 980px;
    height: auto;
    right: 0;
    top: 0;
    
    
}
.right-top1{
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    position: relative;
}
.right-bottom1{
    background-color: #fff;
    padding: 20px;
}
.h21,.right-top1 li{
    font-weight: normal;
    color: #444;
    
}
.right-top1 .pp{
    background-color: #f7fcff;
    color: #999;
    margin-bottom: 30px;
    line-height: 25px;
    width: 980px;
    margin-left: -20px;
    padding:10px 20px;
}
.right-top1 h2,.right-bottom1 *{
    margin-bottom: 20px;
}
.right-bottom1 p{
    color: rgb(68,68,68);
    line-height: 20px;
}
.all{
     display: inline-block;
    width: 98px;
    height: 34px;
    background-color: #4fc08d;
    color: #fff;
    text-align: center;
    line-height: 34px;
    margin-left: 120px;
}
.right-top1 ul li{
    margin-bottom: 10px;
    
}
.right-top1 ul li *{
    display: inline-block;
    vertical-align: middle;
}
.right-top1 ul li span{
    display: inline-block;
    width:120px;
   
}
</style>
