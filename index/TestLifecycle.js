/**
 * 测试：组件的生命周期
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
    constructor(props){
        super(props);
        this.state=({
            isRemove:false, //装卸载组件的状态
        })
    }

    render(){
        var view=this.state.isRemove?null:<LifecycleComponent/>;
        var text=this.state.isRemove?'点击此处装载LifecycleComponent组件':'点击此处卸载LifecycleComponent组件';
        return(
            <View>
                <Text style={{fontSize:22, backgroundColor:'blue'}}>
                    标题：组件的生命周期
                </Text>
                <Text style={{fontSize: 18,backgroundColor:'green'}}
                      onPress={()=>{
                          this.setState({
                              isRemove:!this.state.isRemove
                          })
                      }}
                >{text}</Text>
                {view}
            </View>
        );
    }
}