/**
 * 测试：组件的定义、变量和方法的导入导出
 * @author liusong
 * @date 2017/11/22
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//导入定义好的组件,并导入组件内的变量和方法；
import EIComponent, {author, authorAge, authorSex, sum} from '../js/page/1-component/EIComponent'

export default class TestEIComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            calcResult: '' //存储计算结果
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {/*使用自定义组件并回传name属性*/}
                <EIComponent name='Hello!'/>
                {/*使用导入的变量常量*/}
                <Text style={{fontSize: 14, color: "orange"}}>
                    作者姓名：{author} {'\n'}
                    作者年龄：{authorAge} {'\n'}
                    作者性别：{authorSex}
                </Text>
                {/*使用导入的方法计算2+3*/}
                <Text style={{fontSize: 14}}>2+3={this.state.calcResult}</Text>
                <Text style={{fontSize: 16, backgroundColor: 'green'}}
                      onPress={() => {
                          var result = sum(2, 3);
                          this.setState({
                              calcResult: result
                          });
                      }}
                >点击计算2+3的结果</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //项目等分剩余空间
        justifyContent: 'center', //flex子项在主轴（横轴）方向上的对齐方式：位于容器中心；
        alignItems: 'center',  //flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式；
        backgroundColor: '#F5FCFF',
    }
});