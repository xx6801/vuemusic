import axios from "axios"

const baseUrl = "http://localhost:3000";

//封装获取轮播图的api  调用例子 ： /banner, /banner?type=2 type=0,1,2,3
export function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

//封装获取音乐列表的api  调用例子 ： /personalized?limit==30 limit=10,50,100
export function getMusic(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

//封装获取歌单详情的api  /playlist/detail?id=24381616
export function getMusicList(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//对外抛出
export default { getBanner,getMusic,getMusicList };