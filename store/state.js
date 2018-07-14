//如果使用localStorage，最好包一层try catch，因为浏览器若关闭了localStorage或则使用隐身模式，那么就会报错
let defaultCity = '上海';

try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){}

export default {
  city:defaultCity
}