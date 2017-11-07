<template>
    <div class="slide" @mouseover="stoprun" @mouseout="rungoto">
        <div class="img">
            <a :href="imgs[nowIndex].link">
           
            <transition name="slide-trans">
          <img v-if="show" :src="imgs[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!show" :src="imgs[nowIndex].src">
        </transition>
        </a>
        </div>
        
        <div class="slide-bottom">
            <span>{{imgs[nowIndex].title}}</span>
            <ul class="slide-nav">
                <li>
                    <a href="#" @click="goto(preIndex)">
                        <</a>
                </li>
                <li v-for="(aa,index) in imgs" :class='{"light":nowIndex===index?true:false}'>
                    <a href="#" @click="goto(index)">{{index+1}}</a>
                </li>
                <li>
                    <a href="#" @click="goto(nextIndex)">></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            stop:"",
            show: true,
            nowIndex: 0,
            imgs: [
                {

                    src: require("../../assets/images/p1.jpg"),
                    title: "xxx1",
                    link: "https://www.baidu.com/"
                },
                {

                    src: require("../../assets/images/p2.jpg"),
                    title: "xxx2",
                    link: "https://www.baidu.com/"
                },
                {

                    src: require("../../assets/images/p3.jpg"),
                    title: "xxx3",
                    link: "https://www.baidu.com/"
                },
                {

                    src: require("../../assets/images/p4.jpg"),
                    title: "xxx4",
                    link: "https://www.baidu.com/"
                }
            ]
        }
    },
    computed: {
        preIndex() {
            if (this.nowIndex === 0) {
                return this.imgs.length - 1
            }
            return this.nowIndex - 1
        },
        nextIndex() {
            if (this.nowIndex === 3) {
                return 0
            }
            return this.nowIndex + 1
        }
    },
    methods: {
        goto (index) {
            if(this.nowIndex === index){return false}
      this.show = false
      setTimeout(() => {
        this.show = true
        this.nowIndex = index
      }, 10)
    },
    rungoto(){
        this.stop=setInterval(()=>{
            
            this.goto (this.nextIndex) 
        },2000)
        },
        stoprun(){
            clearInterval(this.stop)
        }
    },
    mounted(){
        this.rungoto()
}  
}
</script>
<style scoped>
.slide {
    height: 500px;
    width: 900px;
    overflow: hidden;
    position: relative;
}

.slide-bottom {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0px;
    z-index:90  ;
    background-color: #000;
    opacity: 0.6;
}

.slide-bottom ul {
    position: absolute;
    right: 15px;
    bottom: 0;
}

.slide-bottom li {
    display: inline-block;
    padding: 5px 8px;
}

.slide-bottom a {
    color: #fff;
    font-size: 13px;
}

.slide-bottom span {
    color: #fff;
    margin-left: 20px;
}

.light {
    text-decoration: underline;
}
.img{
    width: 100%;
   
}
/* .inimg-enter-active {
    transition: all .5s;
}
.inimg-enter {
     transform: translateX(900px);
}

.outimg-leave-active{
    transition: all .5s;
transform: translateX(-900px);

} */
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}

.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}

</style>

