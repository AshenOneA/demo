<template>
    <div>
        <button class="btn" @click="less">-</button>
        <input type="number" class="inp" v-model="number">
        <button class="btn" @click="plus">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            number:this.num
        }
    },
    props: {
        num: {
            type: Number,
            default: 1
        }
    },
    
    watch: {
        number(news,olds) {
            if (!this.number || this.number < this.num||this.number>99) {
              this.number = this.num
            }
            this.$emit("on-change",this.number)

        }
    },
    methods: {
        plus() {
            this.number++
        },
        less() {
            this.number--
        }
    }

}
</script>
<style>
.btn,
.inp {
    width: 25px;
    height: 25px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    float: left;
    outline: none;
}

.inp {
    border-left: none;
    border-right: none;
    width: 30px;
    text-indent: 5px;
}
.inp::-webkit-outer-spin-button,  
.inp::-webkit-inner-spin-button {  
    -webkit-appearance: none;  
}  
.btn {
    cursor: pointer;
}

.btn:hover {
    background-color: #4fc08d;
    color: #fff;
}
</style>

