/**
 * props
 * 1> 默认属性设置；
 * 2> 属性检查约束设置；
 * @author liusong
 * @date 2018/1/1
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,Text, View} from 'react-native'

export default class PropsDetail extends Component{

    //默认属性设置
    static defaultProps={
        name:'张三(默认名字)',
        age:20
    }

    //属性检查
    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired //必须的
    }

    render(){

        return(
            <View>
                <Text style={styles.textStyle}>
                    props.name={this.props.name},
                    props.age={this.props.age},
                    props.sex={this.props.sex}
                </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:14,
    }
});