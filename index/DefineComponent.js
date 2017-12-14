/**
 * 组件的定义和导入导出
 * @author liusong
 * @date 2017/11/22
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import DefineComponent from '../js/page/1-component/DefineComponent'

export default class DefineComponent extends Component{
    render() {
        return (
            <View style={styles.container}>
                {/*1 自定义组件的使用*/}
                <DefineComponent name='Hello!'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //项目等分剩余空间
        justifyContent: 'center', //flex子项在主轴（横轴）方向上的对齐方式：位于容器中心；
        alignItems: 'center',  //flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
        backgroundColor: '#F5FCFF',
    }
});