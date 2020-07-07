import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const HeaderComponent = () => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>To-Do App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        backgroundColor: '#4287f5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
        fontFamily: 'sans-serif-thin'
    }
})

export default HeaderComponent