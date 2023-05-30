<template>
    <div class="listView">
        <!-- 歌单详情 -->
        <listview-top :playlist="music.playlist"></listview-top>
        <!-- 歌曲列表 -->
        <play-list :playlist="music.playlist"></play-list>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getMusicList } from "@/api/index.js" //@ src目录
import listviewTop from "@/components/ListViewTop.vue"
import playList from "@/components/PlayList.vue"
import store from '@/store';
    export default {
        name:"listview",
        setup(){
            var route = useRoute();  //当前路由信息对象 等价于 $route
            var music = reactive({
                list:[],
                playlist:{
                    creator:{ },  //歌单详情
                    tracks:[]   //播放列表
                }
            })
            onMounted(async()=>{
                const id = route.query.id;  //当前歌单的id
                console.log(id);
                var res = await getMusicList(id);  //发送axios请求，获取歌单详情
                // console.log(res);
                music.playlist = res.data.playlist;  //将获取的数据放到响应式数据中
                console.log(music.playlist);

                //将当前专辑播放列表的数据传递到store中playlist中
                store.commit("setPlayList",music.playlist.tracks);
            })
            return { music }
        },
        components:{
            listviewTop,
            playList
        }
    }
</script>
<style lang="less" scoped>


</style>
