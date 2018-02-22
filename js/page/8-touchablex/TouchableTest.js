/**
 * @author liusong
 * @date 2018/2/23
 */
import React, {Component} from 'react'
import {
    StyleSheet, Alert,Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback,
    View
} from 'react-native'

export default class TouchableTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content:'无'
        };
    }

    render() {
        return (
            <View>
                <Text style={styles.titleStyle}>可点击的按钮</Text>
                <Text>点击了：{this.state.content}</Text>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({
                            content: 'TouchableWithoutFeedback'
                        });
                    }}
                    onLongPress={()=>{
                        Alert.alert('提示','确认长按吗？',[
                            {text:'取消', onPress:()=>{},style:'cancel'},
                            {text:'确认', onPress:()=>{}}
                        ])
                    }}
                >
                    <View style={styles.buttonStyle}>
                        <Text>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                {/*-----------------------------------*/}
                <TouchableHighlight
                    onPress={() => {
                        this.setState({
                            content: 'TouchableHighlight'
                        });
                    }}
                    style={styles.touchableStyle}
                    activeOpacity={0.3} //需要配合underlayColor使用
                    underlayColor={'green'}
                    onHideUnderlay={()=>{
                        //衬底隐藏时回调
                    }}
                    onShowUnderlay={()=>{
                        //衬底显示时回调
                    }}
                >
                    <View>
                        <Text>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                {/*-----------------------------------*/}
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            content: 'TouchableOpacity'
                        });
                    }}
                    activeOpacity={0.3}
                >
                    <View style={styles.buttonStyle}>
                        <Text>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                {/*-----------------------------------*/}
                <TouchableNativeFeedback
                    onPress={() => {
                        this.setState({
                            content: 'TouchableNativeFeedback'
                        });
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={styles.buttonStyle}>
                        <Text>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        marginBottom: 5,
        backgroundColor: 'blue',
        color: 'white'
    },
    buttonStyle: {
        marginTop: 5,
        height: 60,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableStyle: {
        backgroundColor: 'green',
        height: 60,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});