/**
 * 自定义组件的三种方式：函数方式，ES5，ES6
 * > 组件的定义；
 * > 组件的导出；
 * > 组件回传属性props；
 * @author liusong
 * @date 2017/10/18
 */

import React, {Component} from 'react'
import {
    Text,
    View
} from 'react-native'

// ES6语法定义组件
export default class DefineComponent extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>
                    ES6 定义组件，收到回传字符“{this.props.name}”
                </Text>
            </View>
        );
    }
}

// ES5语法定义组件：
// 备注：react16版本不支持 React.createClass方式
// var DefineComponent=React.createClass({
//     render(){
//         return <Text style={{fontSize:20,backgroundColor:'green'}}>ES5 define component</Text>
//     }
// })


/**
 * 创建组件的三种方式
 * 3. 函数式定义组件
 * 无状态，无法使用this指针
 */
//无props
// function DefineComponent() {
//     return (
//         <Text style={{fontSize:20,backgroundColor:'blue'}}>Func define component </Text>
//     );
// }
// module.exports=DefineComponent;

//有props
// function DefineComponent(props) {
//     return (
//         <Text style={{fontSize:20,backgroundColor:'blue'}}>Func define component {props.name}</Text>
//     )
// }
// module.exports=DefineComponent;

