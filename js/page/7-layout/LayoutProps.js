/**
 * flex box 布局
 */
import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class LayoutProps extends Component {

    render() {
        return (
            <View>
                <Text style={styles.titleStyle}>布局</Text>
                <View style={{justifyContent:'center',alignItems:'center',height: 200,backgroundColor: "darkgray", marginTop: 0}}>
                    <View style={{justifyContent:'center',alignItems:'center',width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{textAlign:'center', fontSize: 8, width: 12, height:12,backgroundColor:'orange'}}>1</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        marginBottom: 5,
        backgroundColor: 'blue',
        color:'white'
    },
    subTitleStyle: {
        marginTop: 5,
        fontSize: 20,
        backgroundColor: 'orange'
    },
    propsStyle: {
        marginTop: 5,
        fontSize: 18,
        color:'red'
    },
    propsSubStyle: {
        marginTop: 5,
        fontSize: 14
    }
});