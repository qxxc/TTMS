<template>
    <div>
        <div style="height:60px;">
            <router-link to="/index/index_film_operate">
                <el-button type="primary" class="film_operate">操作</el-button>
            </router-link>
        </div>
        <el-badge v-for="its of film_info" value="X" class="item fime_size">
            <img :src="its.img" alt="">
            <p>{{ its.name }}</p>
        </el-badge>
    </div>
</template>

<script>
export default {
    data(){
        return {
            film_info:[
                {
                    img:'../../../static/6f2b1b83b512d8ec417efdf09d34faa3316513.jpg',
                    name:'恐怖浴室'
                },
                {
                    img:'../../../static/7e1f6616b82f532e167a730452c90b9d653258.png',
                    name:'盯上小偷的贼'
                },
                {
                    img:'../../../static/200526fd0facc141caeef984314f7ef8328722.jpg',
                    name:'深海越狱'
                },
                {
                    img:'../../../static/__36827568__2509248.jpg',
                    name:'为奴十二载'
                },
                {
                    img:'../../../static/__11691262__6664179.jpg',
                    name:'致命黑兰'
                },
                {
                    img:'../../../static/__35965556__6833914.jpg',
                    name:'六颗子弹'
                }
            ],
            
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }

}
</script>

<style>
.fime_size{
    width: 160px;
    margin: 20px;
}
.fime_size img{
    height: 220px;
}
.fime_size p{
    text-align: center
}
.film_cao{
    border:2px #F0F4F9 solid;
    border-radius: 5px;
}
.film_operate{
    float: right;
    margin-right: 70px;
}
</style>
