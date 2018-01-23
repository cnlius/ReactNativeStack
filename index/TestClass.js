/**
 * 类的使用
 * @author liusong
 * @date 2018/1/23
 */
import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import People from "../js/page/6-class/People";
import Student from "../js/page/6-class/Student";

export default class TestClass extends Component{
    constructor(props){
        super(props);
        this.people=new People('张三','男');
        this.student=new Student('李四','男',2);
    }

    render(){
        return(
            <View>
                <Text style={styles.titleStyle}>类</Text>
                <Text style={styles.subTitleStyle}>类的使用</Text>
                <Text style={{fontSize:16}}>{this.people.getDescription()}</Text>
                <Text style={styles.subTitleStyle}>类的继承</Text>
                <Text style={{fontSize:16}}>{this.student.getDescription()}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    subTitleStyle: {
        marginTop: 5,
        fontSize: 18,
        backgroundColor: 'orange'
    },
    titleStyle: {
        fontSize: 24,
        backgroundColor: 'blue'
    }
});