<template>
  <div class="right1">
    <div class="right-top1">
      <h2 class="h21">数据统计</h2>
      <div class="pp">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</div> 
      <ul>
        <li><span>产品类型：</span><v-select :version="version" @on-change="onChange($event)"></v-select></li>
        <li><span>适用地区：</span><o-select :address="address" @on-change="onChange($event)"></o-select></li>
        <li><span>有效时间：</span>半年</li>
        <li><span>总价：</span>{{money}} 元</li>
      </ul>
     
     <a href="#" class="all">立即购买</a>
    </div>
    <div class="right-bottom1">
      <h2 class="h21">产品证明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <table>

        <tr>
          <td>安全安保</td>
          <td>办公文教</td>
          <td>彩票</td>
          <td>车辆物流</td>
          <td>成人用品</td>
          <td>出版传媒</td>
          <td>电脑硬件</td>
        </tr>
        <tr>
          <td>电子电工</td>
          <td>
            房地产建筑装修</td>
          <td>分类平台</td>
          <td>
            服装鞋帽</td>
          <td>箱包饰品</td>
          <td>化工原料制品</td>
          <td>机械设备</td>
        </tr>
        <tr>
          <td>家庭日用品</td>
          <td>家用电器</td>
          <td>教育培训</td>
          <td>节能环保</td>
          <td>金融服务</td>
          <td>礼品</td>
          <td>旅游住宿</td>
        </tr>
        <tr>
          <td>美容化妆</td>
          <td>母婴护理</td>
          <td>农林牧渔</td>
          <td>软件</td>
          <td>商务服务</td>
          <td>
            生活服务</td>
          <td>
            食品保健品</td>
        </tr>
        <tr>
          <td>手机数码</td>
          <td>通讯服务设备</td>
          <td>网络服务</td>
          <td>
            医疗服务</td>
          <td>游戏</td>
          <td>
            运动休闲娱乐</td>
          <td>
            招商加盟</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import VSelect from './com/VSelect'
import OSelect from './com/OSelect'
export default{
  components:{
    VSelect,OSelect
  },
  data(){
    return {
      address:[
        {
          add:"北京"
        },
        {
          add:"上海"
        },
        {
          add:"广州"
        },
        {
          add:"天津"
        },
        {
          add:"武汉"
        },
        {
          add:"重庆"
        }
      ],
      version:[
        {
          ver:"红色版"
        },
        {
          ver:"绿色版"
        },
        {
          ver:"紫色版"
        }
      ],
      shop:{
        ver:"红色版",
        add:"北京"
      },
      money:"000"
      
    }
  },
  methods:{
   
    onChange(eve){
      let ee=eval('(' + eve + ')')
      
      if(ee["ver"]){
        this.shop.ver=ee["ver"]
        
      }
      if(ee["add"]){
        this.shop.add=ee["add"]
        
      }
      
      return this.shop
    }
  },
  watch:{
    shop:{
      handler(news,olds){
        this.$http.post("/api/count",news).then(
      (res)=>{
        
        for(let k of res.data){
          if(news.ver===k["ver"]&&news.add===k["add"]){
            this.money=k["money"]
            return k["number"]
          }else{
            this.money="000"
           
          }
        }
      }
        
    )
      },
      deep: true
    }
  },
  mounted(){
    this.$http.post("/api/count",this.shop).then(
      (res)=>{
        for(let k of res.data){
          if(this.shop.ver===k["ver"]&&this.shop.add===k["add"]){
            this.money=k["money"]
            return k["number"]
          }else{
            this.money="000"
           
          }
        }
      }
        
    )
  }
  }
      
  // onBuy(){
  //   this.$http.post("api/count",this.shop).then(
  //     (res)=>{
  //        if (this.shop.ver===res.data.ver||this.shop.add===res.data.ver){

  //        }
  //     },
  //     (err)=>{

  //     }
  //   )
  // }

</script>
<style scoped>

table{
  width: 100%;
   border:0;
   border-collapse:collapse;
}
table td{
  height: 46px;
  text-align: center;
  line-height: 46px;
  color: rgb(68,68,68);
  border: 1px solid rgb(240,242,245);
  
}

</style>