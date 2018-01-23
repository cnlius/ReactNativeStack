/**
 * 类
 * @author liusong
 * @date 2018/1/23
 */
export default class People{
    //人：姓名，性别
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }

    getDescription(){
        return "姓名："+this.name+",性别："+this.sex;
    }
}