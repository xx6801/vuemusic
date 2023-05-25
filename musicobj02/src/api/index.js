import axios from "axios"

const baseUrl = "http://localhost:3000";

//封装获取轮播图的api  调用例子 ： /banner, /banner?type=2 type=0,1,2,3
export function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

//对外抛出
export default { getBanner };