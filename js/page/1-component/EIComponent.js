/**
 * 自定义组件,变量和方法的导入导出
 *
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

//定义单个变量并导出
export var authorSex='男';

//定义变量、常量并批量导出
var author='独孤求败';
const authorAge=100;
export {author,authorAge};

//方法的定义和导出
export function sum(a,b) {
    return a+b;
}

// ES6语法定义组件并用export关键字导出
export default class EIComponent extends Component {
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

// ES5语法定义组件并用export关键字导出：
// 备注：react16版本不支持 React.createClass方式
// var EIComponent=React.createClass({
//     render(){
//         return <Text style={{fontSize:20,backgroundColor:'green'}}>ES5 define component</Text>
//     }
// })


/**
 * 3. 函数式定义组件并用export关键字导出
 * 无状态，无法使用this指针
 */
//无props
// function EIComponent() {
//     return (
//         <Text style={{fontSize:20,backgroundColor:'blue'}}>Func define component </Text>
//     );
// }
// module.exports=EIComponent;

//有props
// function EIComponent(props) {
//     return (
//         <Text style={{fontSize:20,backgroundColor:'blue'}}>Func define component {props.name}</Text>
//     )
// }
// module.exports=EIComponent;

