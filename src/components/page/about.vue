<template>
    <div>
        <div class="about" @click="close"></div>
        <div class="about1">
            <span @click="close">x</span>
           <slot name="s1"></slot>
            <slot name="pay1"></slot>
            <slot name="banks"></slot>
            <slot name="succ"></slot>
        </div>
    </div>
</template>
<script>

export default {
    
    // props:{
    //     payShow:{
    //         type:Boolean
    //     }
    // },
    methods: {
        close() {
            // console.log(11111)
            // console.log(this.payShow)
            this.$emit("close1")
        }
    }
}
</script>
<style scoped>

.about {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0;
    padding: 0;
    z-index: 99;
}
.about1 p{
     z-index: 100;
}
.about1 {
    background-color: #fff;
    line-height: 22px;
    /* max-width: 55%; */
    max-height: 50%;
    overflow:auto;
    border: 2px solid black;
    position: fixed;
    top: 20%;
    left: 30%;
    right: 20%;
    z-index: 100;
    padding:1% 1%;
}

.about1 span {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 16px;
    cursor: pointer;
}

.about1 span:hover {
    color: #4fc08d
}
</style>
