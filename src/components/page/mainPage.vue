<template>
    <div class="container">
       

        <div class="left">
            <div class="left-top">
                <div class="left-top-head">
                    <h2>全部产品</h2>
                </div>
                <template v-for="aa in list">
                    <div class='left-top-content'>
                        <p>{{aa.title}}</p>
                        <ul>
                            <li v-for="bb in aa.listData">
                                <router-link :to="{path:bb.link1}">{{bb.oData}}</router-link>
                                <span v-if="bb.hot">HOT</span>
                            </li>

                        </ul>
                    </div>
                    <hr v-if="!aa.last">

                </template>
            </div>
            <div class="left-bottom">
                <div class="left-bottom-head">
                    <h2>最新消息</h2>

                </div>
                <div class="left-bottom-content">
                    <ul>
                        <li v-for="cc in list2">
                            <a :href="cc.link">{{cc.oData}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="right-top">
                <slide></slide>

            </div>
            <div class="right-bottom">
                <template v-for="(dd,index) in list3">
                    <div class="right-bottom-box" :class="[{'right-bottom-box-odd':index%2===0}
                            ,'right-bottom-box-'+index]">
                        <div class="right-bottom-box-a">
                            <h2>{{dd.title}}</h2>
                            <p>{{dd.dec}}</p>
                            <router-link :to="{path:dd.link1}">立即购买</router-link>
                        </div>

                    </div>

                </template>
            </div>
        </div>
    </div>
</template>
<script>
import slide from './slide'

export default {
    components: {
        slide
    },
    created() {
        this.$http.post('api/newlist').then(
            (res) => {
                this.list2 = res.data

            }, function(err) {
                console.log(err)
            }
        )
    },
    data() {
        return {
            list2: '',
            list: [{
                title: "PC产品",
                listData: [
                    {
                        oData: "数据统计",
                        link1:"detail/count"
                    },
                    {
                        oData: "数据预测",
                        link1:"detail/forecast"
                    },
                    {
                        oData: "流量分析",
                        link1:"detail/analysis",
                        hot: true
                    },
                    {
                        oData: "广告发布",
                        link1:"detail/advertising"
                    }
                ]
            },
            {
                title: "手机应用类",
                last: true,
                listData: [
                    {
                        oData: "91助手",
                        link: "https://www.baidu.com/"
                    },
                    {
                        oData: "产品助手",
                        link: "https://www.baidu.com/",
                        hot: true
                    },
                    {
                        oData: "智能地图",
                        link: "https://www.baidu.com/"

                    },
                    {
                        oData: "团队语音",
                        link: "https://www.baidu.com/"
                    }
                ]
            }
            ],

            list3: [
                {
                    title: "开放产品",
                    dec: '开放产品是一款开放产品',
                    link1:"detail/count"
                },
                {
                    title: "品牌营销",
                    dec: '品牌营销帮助你的产品更好地找到定位',
                    link1:"detail/analysis"
                },
                {
                    title: "使命必达",
                    dec: '使命必达快速迭代永远保持最前端的速度',
                    link1:"detail/forecast"
                },
                {
                    title: "勇攀高峰",
                    dec: '帮你勇闯高峰，到达事业的顶峰',
                    link1:"detail/advertising"
                }
            ],
            index: 1,
            page: ["<", 1, 2, 3, 4, ">"]
        }
    },
    methods: {
        cimg(e) {
            this.index = e.currentTarget.textContent;
        }
    }
}  
</script>
<style scoped>


.container {
    width: 1200px;
    margin: 14px auto 0;
}

.container::after {
    content: " ";
    display: block;
    clear: both;
}

.left {
    width: 270px;
    margin-right: 20px;
    float: left;
}

.right {
    float: right;
    position: relative;
    left: -13px;
}



/* .left,.right{
    display: inline-block;
} */

.left h2 {
    color: #fff;
    font-weight: normal;
    font-size: 14px;
    margin-left: 15px;
}

.left .left-top .left-top-head,
.left .left-bottom .left-bottom-head {
    background-color: #4fc08d;

    height: 34px;

    line-height: 34px;
}

.left .left-top .left-top-content,
.left .left-bottom .left-bottom-content {
    background-color: #fff;
}

.left .left-top {
    margin-bottom: 15px;
}

.left .left-top .left-top-content p {
    font-size: 14px;
    font-weight: bold;
    padding: 15px;
}

.left-top-content a,
.left-bottom-content a {

    color: #444;
}

.left-top-content li,
.left-bottom-content li {
    padding: 0 20px 5px;
}

.left-top-content hr {
    background-color: #ddd;
}

.left-top-content {
    padding-bottom: 10px;
}

.left-top-content span {
    color: #fff;
    background-color: red;
}

.left-bottom-content ul {
    padding: 25px 5px 400px;
}

.right-bottom {


    width: 900px;
    height: 300px;
}

.right-bottom-box-odd {
    margin-right: 20px;
}

.right-top {
    width: 900px;
    height: 500px;
    margin-bottom: 25px;
}

.right .right-bottom a {
    display: inline-block;
    width: 98px;
    height: 34px;
    background-color: #4fc08d;
    color: #fff;
    text-align: center;
    line-height: 34px;
}

.right-bottom-box-a {
    position: absolute;
    left: 140px;
    top: 20px;
}

.right-bottom-box-a p {
    line-height: 50px;
}

.right-bottom-box-0 {
    background: url(../../assets/images/1.png) 20px center no-repeat;
}

.right-bottom-box-1 {
    background: url(../../assets/images/3.png) 20px center no-repeat;
}

.right-bottom-box-2 {
    background: url(../../assets/images/2.png) 20px center no-repeat;
}

.right-bottom-box-3 {
    background: url(../../assets/images/4.png) 20px center no-repeat;
}

.right-bottom-box {
    width: 440px;
    height: 166px;
    background-color: #fff;
    display: inline-block;
    margin-bottom: 20px;
    position: relative;
}




</style>
