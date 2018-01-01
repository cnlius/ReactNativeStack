/**
 * Props测试
 * 1> props
 * 2> 属性组；
 * 3> 延展操作符；
 * 4> 解构赋值；
 * @author liusong
 * @date 2018/1/1
 */

import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import PropsDetail from '../js/page/3-props/PropsDetail'

export default class PropsTest extends Component {

    render() {
        var params = {name: '独孤求败', age: 22, sex: '女'};
        var {name,sex}=params;
        return (
            <View>
                <Text style={{fontSize: 18, backgroundColor: 'blue'}}>
                    Props测试
                </Text>
                <Text style={styles.titleStyle}>Props默认属性和类型检查</Text>
                <PropsDetail
                    name="李四"
                    sex='男'
                />
                <Text style={styles.titleStyle}>属性组</Text>
                <PropsDetail
                    name={params.name}
                    age={params.age}
                    sex={params.sex}
                />
                <Text style={styles.titleStyle}>延展操作符传递属性组内容</Text>
                <PropsDetail {...params}/>
                <Text style={styles.titleStyle}>延展操作符解构赋值</Text>
                <PropsDetail
                    name={name}
                    age={100}
                    sex={sex}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    titleStyle:{
        fontSize:18,
        color:'red'
    }
});