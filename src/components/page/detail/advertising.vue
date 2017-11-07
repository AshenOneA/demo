<template>
<div class="right1">
    <div class="right-top1">
      <h2 class="h21">广告发布</h2>
      <div class="pp">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</div> 
      <ul>
        <li>
          <span>购买数量：</span>
          <plusLess :num="num"></plusLess>
        </li>
        <li>
          <span>行业：</span>
          <o-select :address="address"></o-select>
        </li>

        <li>
          <span>产品版本：</span>
          <v-selects :type="type"></v-selects>
        </li>
        <li>
          <span>有效时间：</span>
          半年
        </li>
        <li>
          <span>总价：</span>500 元</li>
      </ul>
      <a href="#"  class="all">立即购买</a>
    </div>
    <div class="right-bottom1">
      <h2 class="h21">产品说明</h2>
      <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
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
    import OSelect from './com/OSelect'

import VSelects from './com/VSelects'
import plusLess from './com/plusLess'
export default {
  components:{
    OSelect,VSelects,plusLess
  },
  data() {
    return {
      type: [
        {
          ty: "初级版"
        },
        {
          ty: "中级版"
        },
        {
          ty: "高级版"
        },
        {
          ty: "专家版"
        },
      ],
     
      num: 20,
      address: [
        {
          add: "出版业"
        },
        {
          add: "媒体"
        },
        {
          add: "金融"
        },
         {
          add: "互联网"
        },
         {
          add: "游戏"
        }

      ]
    }
  }
} 
</script>
<style>
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
