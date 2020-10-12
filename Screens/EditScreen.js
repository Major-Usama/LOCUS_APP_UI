import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function EditScreen() {
    return (
        <View style={styles.container}>
            <Text>This is edit Screen Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }


})
