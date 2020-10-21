import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export const PromptScreen = ({navigation}) => {
    return <View style={styles.main}>
        <Text style={styles.text}>Hello {navigation.getParam('name')} !</Text>
    </View>
}


const styles = StyleSheet.create({
    main: {
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#c89c9c',
    },
    text: {
        fontSize: 32,
    }


});