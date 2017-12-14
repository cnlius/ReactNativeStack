/**
 * 组件的生命周期
 * @author liusong
 * @date 2017/12/14
 */
import React,{Component} from 'react'
import {
    StyleSheet, //样式表
    Text,
    View
} from 'react-native'

export default class LifecycleComponent extends Component{
    render(){
        console.log('--render--')
        return(
            <View>
                <Text style={{fontSize:20, backgroundColor:'red'}}>
                    组件的生命周期
                </Text>
            </View>
        );
    }
}