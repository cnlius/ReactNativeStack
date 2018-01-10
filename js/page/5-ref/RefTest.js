/**
 * 定义ref方法一
 * ref:通过ref获取组件的实例
 * @author liusong
 * @date 2018/1/1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native'
import StateDetail from '../4-state/StateDetail'

export default class RefTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.titleStyle}>ref定义方式1</Text>
                <Text style={styles.buttonStyle}
                      onPress={() => {
                          // var size = this.refs.reftest.getSize();
                          var size=this.refs['reftest'].getSize();
                          this.setState({
                              size: size
                          });
                      }}
                >点击通过ref获取气球的size={this.state.size}</Text>
                <Text>------引用StateDetail组件-----</Text>
                {/*引入ref*/}
                <StateDetail
                    //定义ref属性
                    ref="reftest"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 5,
        fontSize: 18,
        backgroundColor: 'yellow'
    },
    titleStyle: {
        fontSize: 24,
        backgroundColor: 'green'
    }
});