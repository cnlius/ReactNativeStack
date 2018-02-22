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
                        Alert.alert('提示','确认删除吗？',[
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
                >
                    <View style={styles.buttonStyle}>
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
    }
});