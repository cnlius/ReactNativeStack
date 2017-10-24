/**
 * Hello world 认识React Native
 * @author liusong
 * @date 2017/10/18
 */

//组件导入区：导入开发需要的组件

//导入React，和React中的Component组件
import React,{Component} from 'react'
import {
    StyleSheet, //样式表
    Text,
    View
} from 'react-native'

export default class HelloWorld extends Component<{}>{
    // Component<{}>: 0.49版本更改？？？

    //render方法是必须的方法，返回最终渲染出来界面的JSX语句
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Hello World
                </Text>
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});