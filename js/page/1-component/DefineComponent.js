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