import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CategoryClickScreen() {
    return (
        <View style={styles.container}>
            <Text>This is category click screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    
}

})
