<template>
  <div>
    <table>
      <tr class="tr1">
        <th v-for="aa in table">{{aa.th}}</th>
      </tr>
      <tr>
        <td v-for="(bb,index,k) in payShop">{{bb instanceof Array?bb.join(' '):bb}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props:{
    payShop:{
      type:Object
    }
  },
  data() {
    return {
      table: [
        {
          th: "购买数量"
        },
        {
          th: "产品类型"
        },
        {
          th: "有效时间"
        },
        {
          th: "产品版本"
        },
        {
          th: "总价"
        }
      ]
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
}

.tr1 {
  background-color: #4fc08d;
}
td{
  border: 1px solid #e2e2e2;
  text-align: center;
}
th {
  border: 1px solid #4fc08d;
  color: #fff;
  font-weight: normal;
}
th,td{
  padding:5px 10px;
}

</style>

