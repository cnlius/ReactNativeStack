/**
 * state
 * 1> state的默认值设置；
 * 2> 修改state;
 * @author liusong
 * @date 2018/1/1
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

export default class StateDetail extends Component {

    //定义state,方法3：
    state = {
        size: 80
    }

    constructor(props) {
        super(props);
        //定义state,方法1：
        // this.state={
        //     size:80
        // };
        //定义state,方法2：
        // this.state=({
        //     size:80
        // });
    }

    render() {
        return (
            <View>
                <Text style={styles.titleStyle}>state</Text>
                <Text style={styles.buttonStyle}
                      onPress={()=>{
                          this.setState({
                              size:this.state.size+10
                          });
                      }}
                >1. 点我气球变大</Text>
                <Text style={styles.buttonStyle}
                      onPress={()=>{
                          this.setState({
                              size:this.state.size-10
                          });
                      }}
                >2. 点我气球变小</Text>
                <Image
                    style={{width:this.state.size,height:this.state.size}}
                    source={require('../../../res/images/balloon.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width:200,
        marginTop:5,
        fontSize: 18,
        backgroundColor:'gray'
    },
    titleStyle: {
        fontSize: 24,
        backgroundColor: 'blue'
    }
});