/**
 * 类
 * 学生 继承自 People
 * @author liusong
 * @date 2018/1/23
 */
import People from "./People";

export default class Student extends People{
    constructor(name,sex,grade){
        super(name,sex);
        this.grade=grade;
    }

    getDescription(){
        return "继承自People,"+super.getDescription()+",班级："+this.grade;
    }
}