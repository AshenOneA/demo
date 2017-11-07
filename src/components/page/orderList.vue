<template>
    <div class="container">
        <h2>您的产品</h2>
        <div class="head">

            选择产品：
            <o-select :address="address" @on-change="onChange($event)"></o-select>
            开始日期：
            <v-date-picker></v-date-picker>
            结束日期：
            <v-date-picker></v-date-picker>
            关键词：<input type="text" v-model.lazy="key">
        </div>
        <div class="center">
            <table>
                <tr class="tr1">
                    <th v-for="aa in table">{{aa.th}}</th>
                </tr>
                <tr v-for="bb in tableData">
                    <td v-for="cc in table">{{bb[cc.th]}}</td>
                </tr>
            </table>
        </div>

    </div>
</template>
<script>
import OSelect from './detail/com/OSelect'
import VDatePicker from './detail/com-1/datepicker'
export default {
    components: {
        OSelect, VDatePicker
    },
    data() {
        return {

            table: [
                {
                    th: "订单号"
                },
                {
                    th: "购买产品"
                },
                {
                    th: "版本类型"
                },
                {
                    th: "有效时间"
                },
                {
                    th: "购买日期"
                },
                {
                    th: "数量"
                },
                {
                    th: "总价"
                }
            ],
            address: [
                {
                    add: "数据统计"
                },
                {
                    add: "数据预测"
                },
                {
                    add: "流量分析"
                },
                {
                    add: "广告发布"
                }
            ],
            tableData: "",
            key: "",
            yours: {
                product: "",
                key: ""
            }
        }
    },
    methods: {
        onChange(gg) {
            let ggg = eval('(' + gg + ')')
            if (ggg['add']) {
                this.yours.product = ggg['add']
               this.orderList()
            }
        },
        orderList() {
            this.$http.post("/api/orderList", this.yours).then(
                (res) => {
                    this.tableData = res.data
                    console.log(this.yours)
                }
            )
        }
    },
    watch: {
        key(newv, oldv) {
            this.yours.key = newv
          
             this.orderList()
        },
        yours: {
            handler(news, olds) {
                console.log(this.yours)
                this.orderList()
            }
        },
        deep: true
    },
    mounted() {
        this.orderList()
        console.log(this.$store)
    }
}
</script>
<style scoped>
.container {
    width: 1200px;
    margin: 20px auto;
}

.head {
    margin-top: 20px;
}

.head * {
    display: inline-block;
    margin-bottom: 20px;
    margin-right: 10px;
}

.head input {
    height: 28px;
    text-indent: 5px;
    outline: none;
    border: 1px solid rgb(227, 227, 227);
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

.tr1 {
    background-color: #4fc08d;
}

td {
    border: 1px solid #e2e2e2;
    text-align: center;
}

th {
    border: 1px solid #4fc08d;
    color: #fff;
    font-weight: normal;
    cursor: pointer;
}

th,
td {
    padding: 8px 10px;
}

td {
    background-color: #fff;
}

.center {
    height: 1000px;
}
</style>

