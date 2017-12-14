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

    //mounting：<1>组件设置初始状态(es5:getDefaultProps)
    /*static defaultProps(){
        console.log('--constructor--');
    }*/

    //mounting：<2>组件的初始化(代替es5:getInitialState)
    constructor(props){
        super(props);
        console.log('--constructor--');
    }

    //mounting：<3>组件装载前调用
    componentWillMount() {
        console.log('--componentWillMount--');
    }

    //mounting：<4>渲染
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

    //mounting: <5>组件渲染完成调用
    componentDidMount() {
        console.log('--componentDidMount--');
    }

    //updating：<0>属性props改变时调用接收属性改变的方法
    componentWillReceiveProps(nextProps) {
        console.log('--componentWillReceiveProps--');
    }

    //updating: <1>state改变或者接收props改变方法之后，询问是否更新组件
    shouldComponentUpdate(nextProps,nextState) {
        console.log('--shouldComponentUpdate--');
        return true; //true:更新
    }

    //updating: <2>组件将要更新->调用render()
    componentWillUpdate(nextProps,nextState){
        console.log('--componentWillUpdate--');
    }

    //updating: <3>组件更新完成
    componentDidUpdate(nextProps,nextState) {
        console.log('--componentDidUpdate--');
    }

    //unMounting: 组件卸载
    componentWillUnmount() {
        console.log('--componentWillUnmount--');
    }
}