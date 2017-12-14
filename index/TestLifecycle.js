/**
 * 组件的生命周期
 * @author liusong
 * @date 2017/12/15
 */
import React,{Component} from 'react'
import {
    StyleSheet, //样式表
    Text,
    View
} from 'react-native'
import LifecycleComponent from "../js/page/2-lifecycle/LifecycleComponent";

export default class TestLifecycle extends Component{
    render(){
        return(
            <View>
                <LifecycleComponent/>
            </View>
        );
    }
}