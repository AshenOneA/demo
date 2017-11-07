<template>
  <div class="right1">
    
    <div class="right-top1">
      <h2 class="h21">流量分析</h2>
      <div class="pp">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</div>
      <ul>
        <li>
          <span>购买数量：</span>
          <plusLess :num="num" @on-change="onChange($event)"></plusLess>
        </li>
        <li>
          <span>产品类型：</span>
          <o-select :address="address" @on-change="onChange($event)"></o-select>
        </li>

        <li>
          <span>有效时间：</span>
          <v-select :version="version" @on-change="onChange($event)"></v-select>
        </li>
        <li>
          <span>产品版本：</span>
          <v-selects :type="type" @on-change="onChange($event)"></v-selects>
        </li>
        <li>
          <span>总价：</span>{{money}} 元</li>
      </ul>
      <a href="#" class="all" @click="payPage">立即购买</a>
    </div>
    <div class="right-bottom1">
      <h2 class="h21">产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
      <h3>用户行为指标</h3>
      <p>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括： <br> 用户在网站的停留时间； <br> 用户来源网站（也叫“引导网站”）； <br> 用户所使用的搜索引擎及其关键词； <br> 在不同时段的用户访问量情况等。
      </p>
      <h3>浏览网站方式</h3>
      <p>用户上网设备类型 <br> 用户浏览器的名称和版本 <br> 访问者电脑分辨率显示模式 <br> 用户所使用的操作系统名称和版本 <br> 用户所在地理区域分布状况等
      </p>
    </div>
  </div>
</template>
<script>
import OSelect from './com/OSelect'
import VSelect from './com/VSelect'
import VSelects from './com/VSelects'
import plusLess from './com/plusLess'

import Vue from 'vue'
export default {
  components: {
    OSelect, VSelect, VSelects, plusLess
  },
  
  data() {
    return {
      money:"000",
      type: [
        {
          ty: "客户版"
        },
        {
          ty: "代理商版"
        },
        {
          ty: "专家版"
        },
      ],
      version: [
        {
          ver: "半年"
        },
        {
          ver: "一年"
        },
        {
          ver: "三年"
        },
      ],
      num: 1,
      address: [
        {
          add: "入门版"
        },
        {
          add: "中级版"
        },
        {
          add: "高级版"
        },
      ],
      shop: {
        num: 1,
        add: "入门版",
        ver: "半年",
        ty: []
      }
    }
  },
  methods: {
    onChange(ana) {

      if (typeof ana === "number") {

        this.shop.num = ana
       
        return this.shop
      }
      if (ana['ty']) {
        this.shop.ty = []

        for (let i = 0; i < ana['ty'].length; i++) {

          this.shop.ty.push(ana['ty'][i])
        }


        return this.shop

      }
      let aa = eval('(' + ana + ')')
      if (aa['ver']) {

        this.shop.ver = aa["ver"]
        return this.shop
      }
      if (aa['add']) {

        this.shop.add = aa["add"]
        return this.shop
      }



    },
    payPage(){
      let sendShop=this.shop
      this.$set(sendShop,"money",this.money)
      this.$emit("pay-show",sendShop)
    }
  },
  watch:{
    shop:{
      handler(news,olds){
        this.$http.post('/api/count',news).then(
          (res)=>{
            if(this.shop.ver===res.data[2].ver&&this.shop.add===res.data[2].add&&this.shop.num===res.data[2].num&&this.shop.ty.toString()===res.data[2].ty.toString()){
             this.money=res.data[2].money
           }else{
             this.money="000"
           }
            }
         
          
        )
      },
      deep: true
    }
  },
  mounted(){
    this.$http.post('/api/count',this.shop).then(
          (res)=>{
            for(let k of res.data){
              if(this.shop.ver===k.ver&&this.shop.add===k.add&&this.shop.num===k.num&&this.shop.ty.toString()===k.ty.toString()){
             this.money=k.money
           }
            }
         
          }
        )
  }
} 
</script>
<style>

</style>
 
      
        