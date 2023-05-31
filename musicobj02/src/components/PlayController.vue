<template>
    <div class="playController">
        <div class="left">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="" @click="show=!show">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].name}}</div>
                <div class="tips">横滑可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg v-if="abc" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-iconstop"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>

        <!-- 歌曲详情页面 -->
        <play-music v-show="show" :abc="abc" :play="play" :playDetail="playlist[playCurrentIndex]" @back="show=!show"></play-music>
        <!-- 如何获取播放歌曲的mp3地址   https://music.163.com/song/media/outer/url?id=歌曲id.mp3 -->
        <!-- controls audio标签属性 一般不显示 -->
        <!-- audio play()播放音乐 pause()暂停音乐 -->
        <audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3` "></audio>
    </div>
</template>
<script>
import { mapState  } from 'vuex';
import playMusic from "@/components/PlayMusic.vue"
import { getLyric } from '@/api'
import store from "@/store/index"
export default {
    name: "playcontroller",
    data(){
        return {
            abc:true,   //当前音乐是否出于暂停状态
            show:false  //歌曲详情是否显示
        }
    },
    components:{
        playMusic
    },
    async mounted(){  //view与model绑定成功之后
        var res = await getLyric(this.playlist[this.playCurrentIndex].id);
        // console.log(res.data.lrc.lyric);
        store.commit("setLyric",res.data.lrc.lyric);  //修改状态管理库中的歌词数据
    },
    async updated(){  //view与model数据更新之后
        var res = await getLyric(this.playlist[this.playCurrentIndex].id);
        // console.log(res.data.lrc.lyric);
        store.commit("setLyric",res.data.lrc.lyric);  //修改状态管理库中的歌词数据
    },
    computed:{
        ...mapState(["playlist","playCurrentIndex"])  //获取正在播放歌曲列表，以及正在播放歌曲下标
    },
    methods:{
        play(){
            if(this.$refs.audio.paused){  //当前audio出于暂停状态
                // this.$refs.audio 获取audio标签
                this.$refs.audio.play();
                this.abc = false;
            }else{   //当前audio出于播放状态
                this.$refs.audio.pause();
                this.abc = true;
            }
          
        }
    }
    
}
</script>
<style lang="less">
.playController {
    background: #fff;
    width: 7.5rem;
    height: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;

    .left {
        display: flex;
        padding: 0 0.2rem;

        img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
        }

        .content {
            padding: 0 0.2rem;

            .tips {
                font-size: 0.2rem;
                color: #999;
            }
        }
    }

    .right {
        .icon {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 0.2rem;
        }
    }
}
</style>