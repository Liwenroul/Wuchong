import React, {Component}from 'react';
import {
    Alert,
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    NavigatorIOS,
    TouchableOpacity,
    StatusBar,
    ScrollView,
}from 'react-native';

import Header from './Header';
import SearchBox from './SearchBox';
import CityList from './CityIndex';       


export default class SimpleSelectCity extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Header nav={this.props.nav} title="当前城市：北京" />
                <SearchBox />
                <ScrollView>
                    <CityList nav={this.props.nav}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        // paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
    },
    currentCity:{
        backgroundColor: '#ffffff',
        height: 20,
        margin:5,
    },
    currentCityText:{
        fontSize:16,
    }
});