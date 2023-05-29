<template>
    <div class="playlist">
        <div class="playlist-top">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang3"></use>
                </svg>
                <div class="text">
                    <div class="title">播放全部</div>
                    <div class="num">(共10首)</div>
                </div>
            </div>
            <div class="btn">
                +收藏（100）
            </div>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item,index) in playlist.tracks" :key="item.id">
                <div class="left">
                    <div class="index">{{index+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="anthor">
                            <span class="name">{{item.al.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang2"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liebiao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "playlist",
    props:["playlist"]
}
</script>
<style lang="less" scoped>
.playlist {
    width: 7.5rem;
    padding: 0 0.4rem;
    background-color: #fff;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0.4rem;

    .playlist-top {
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;

        .left {
            display: flex;
            align-items: center;

            .icon {
                width: 0.6rem;
                height: 0.6rem;
            }

            .title {
                font-size: 0.34rem;
                font-weight: 900;
            }

            .num {
                font-size: 0.24rem;
                color: #666;
            }

            .text {
                display: flex;
                align-items: center;
                margin-left: 0.2rem;
            }

        }

        .btn {
            font-size: 0.24rem;
            color: #fff;
            background-color: orangered;
            line-height: 0.6rem;
            padding: 0.1rem;
            border-radius: 0.4rem;

        }
    }

    .list {
        .playItem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1rem;

            .left {
                flex: 1;
                display: flex;
                align-items: center;
                color: #666;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-all;
                word-wrap: break-word;

                .index {
                    width: 0.4rem;
                }

                .content {
                    padding-left: 0.4rem;
                    width: 100%;
                }

                .title {
                    width: calc(100% - 0.4rem);
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    word-wrap: break-word;
                    font-size: 0.3rem;
                    font-weight: 900;
                    color: #000;
                    margin-bottom: 0.1rem;
                }

                .tag {
                    font-size: 0.2rem;
                    color: orangered;
                    border: 1px solid orangered;
                    border-radius: 0.1rem;
                    margin-right: 0.1rem;

                }

                .anthor {
                    color: #666;
                    display: flex;
                    overflow: hidden;
                    height: 0.35rem;

                    .name {
                        width: 3rem;
                    }
                }
            }

            .right {
                width: 1.6rem;

                .icon {
                    margin: 0 0.2rem
                }
            }

        }
    }
}
</style>