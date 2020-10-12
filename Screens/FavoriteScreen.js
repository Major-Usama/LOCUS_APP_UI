import React from 'react'
import { StyleSheet, Text, View ,StatusBar,Platform} from 'react-native'
import Header from '../Components/Header'

export default function FavoriteScreen() {
    return (
        <View style={styles.container}>
            <Header />
            
        </View>
    )
}

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        backgroundColor:'#fff',
        paddingTop:Platform.OS==='android' ?StatusBar.currentHeight :0
    }


})
