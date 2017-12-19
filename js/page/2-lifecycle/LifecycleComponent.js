/**
 * 组件的生命周期
 * @author liusong
 * @date 2017/12/14
 */
import React, {Component} from 'react'
import {StyleSheet,Text, View} from 'react-native'

export default class LifecycleComponent extends Component {

    //--装载阶段---------------------------------

    //mounting：<1>组件设置初始状态(es5:getDefaultProps)
    static defaultProps = {
        //初始化props的属性
    }

    //ES5设置props初始属性
    /*getDefaultProps(){
        return{
            name:''
        };
    }*/

    //mounting：<2>组件的初始化(代替es5:getInitialState)
    constructor(props) {
        super(props);
        console.log('--constructor--');
        this.state = {
            clickCount: 0
        }
    }

    //mounting：<3>组件装载前调用
    componentWillMount() {
        console.log('--componentWillMount--');
    }

    //mounting：<4>渲染
    render() {
        console.log('--render--')
        return (
            <View>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>
                    组件的生命周期
                </Text>
                <Text style={styles.clickButton}
                      onPress={() => {
                          this.setState({
                              clickCount: this.state.clickCount + 1
                          })
                      }}
                >点击改变state触发生命周期</Text>
                <Text style={{fontSize: 16, color: 'black'}}>
                    state.clickCount改变了：{this.state.clickCount}次
                </Text>
                <Text style={styles.clickButton}>
                    点击改变props触发生命周期???
                </Text>
            </View>
        );
    }

    //mounting: <5>组件渲染完成调用
    componentDidMount() {
        console.log('--componentDidMount--');
    }

    //--更新阶段---------------------------------

    //updating：<0>属性props改变时调用接收属性改变的方法
    componentWillReceiveProps(nextProps) {
        console.log('--componentWillReceiveProps--');
    }

    //updating: <1>state改变或者接收props改变方法之后，询问是否更新组件
    shouldComponentUpdate(nextProps, nextState) {
        console.log('--shouldComponentUpdate--');
        return true; //true:更新
    }

    //updating: <2>组件将要更新->调用render()
    componentWillUpdate(nextProps, nextState) {
        console.log('--componentWillUpdate--');
    }

    //updating: <3>组件更新完成
    componentDidUpdate(nextProps, nextState) {
        console.log('--componentDidUpdate--');
    }

    //--卸载阶段---------------------------------

    //unMounting: 组件卸载
    componentWillUnmount() {
        console.log('--componentWillUnmount--');
    }
}
const styles = StyleSheet.create({
    clickButton: {
        fontSize: 18,
        backgroundColor: 'yellow',
        color: 'blue',
        textAlign: 'center'
    }
});