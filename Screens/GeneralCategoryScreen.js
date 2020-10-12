import React,{useState} from 'react'
import { StyleSheet, TextInput,Image, View,Platform,StatusBar ,SafeAreaView,Text} from 'react-native'
import Header from '../Components/Header'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { ScrollView } from 'react-native-gesture-handler';

import CityPicker from '../Components/CityPicker';
import CategoryBox from '../Components/CategoryBox';


//images
import backImage from '../assets/cafeCat.png'
import centerImage from '../assets/icons/cup.png'

import artImage from '../assets/artImage.png'
import art from '../assets/icons/art.png'

import  RestoImage from '../assets/restoImage.png'
import resto from '../assets/icons/resturent.png'

import  ShopImage from '../assets/shopImage.png'
import shop from '../assets/icons/shopping.png'


import  SportsImage from '../assets/sportsImage.png'
import sports from '../assets/icons/sports.png'

import  SightImage from '../assets/sightImage.png'
import sight from '../assets/icons/sight.png'




export default function GeneralCategoryScreen({navigation}) {
    const [pass, setPass] = useState("");




    const [loaded] = useFonts({
        "MoskMedium500": require('../assets/fonts/MoskMedium500.ttf'),
        "MoskBold700": require('../assets/fonts/MoskBold700.ttf'),
        
      });
    
      if (!loaded) {
        return <AppLoading />;
      }
    

    return (
        <SafeAreaView style={styles.container}>

            <Header />


            
        <View style={styles.searchContainer}>
          <View style={styles.searchSubContainer}>
            <Image source={require("../assets/icons/searchIcon.png")} />

            <TextInput
              keyboardType="numbers-and-punctuation"
              
              style={styles.inputpass}
              placeholder="What are you looking for"
              placeholderTextColor="#707070"
              onChangeText={(text) => setPass(text)}
              defaultValue={pass}
            />

            <Image style={{
            alignSelf:'center',}} source={require('../assets/icons/modal.png')} />


          </View>
        </View>

        <View style={styles.categortConteiner}>
           
        <Text onPress={()=>navigation.navigate('CategoryClickScreen')} style={styles.Recomend}>Browse Activities in</Text>

        <View style={styles.passwordContainer}>
          <View style={styles.passwordSubContainer}>
            <Image style={{marginLeft:wp('-2%'),width:6,height:10}} source={require("../assets/icons/city.jpg")} />

            

            <CityPicker />

          </View>
        </View>

        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.catRow1}>
            <CategoryBox 
            centerImage={centerImage}
            backImage={backImage}
            text="Cafes"
            />
            
            

            <CategoryBox 
            centerImage={art}
            backImage={artImage}
            text="Arts and Crafts"
            />

        </View>



        <View style={styles.catRow2}>
            <CategoryBox 
            centerImage={resto}
            backImage={RestoImage}
            text="Resturent"
            />
            
            

            <CategoryBox 
            centerImage={centerImage}
            backImage={ShopImage}
            text="Shopping"
            />

        </View>


        <View style={styles.catRow2}>
            <CategoryBox 
            centerImage={sports}
            backImage={SportsImage}
            text="Sports and outdoor"
            />
            
            

            <CategoryBox 
            centerImage={sight}
            backImage={SightImage}
            text="Sightseeing"
            />

        </View>
        </ScrollView>
        
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:Platform.OS==='android' ?StatusBar.currentHeight :0

},


searchContainer:
  {
    width: wp("90%"),
    height: hp("5%"),
    backgroundColor:'#fff',
    elevation:5,
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "space-between",
    padding: wp("5%"),
    marginTop:hp('5%'),
    flexDirection:'row',
    alignItems:'center'

  },
  searchSubContainer:
  {
    flexDirection: "row",  
  },

  inputpass:
  {
    width: wp("70%"),
    height: hp("2.5%"),
    paddingHorizontal: wp("3%"),
    fontSize:10,
    fontFamily:'MoskMedium500'

  },

  Recomend:
{
    fontFamily:"MoskBold700",
    color:"#8338EB",
    fontSize:16,
 
    

    

},

passwordContainer:
  {
    width: wp("29%"),
    height: hp("5%"),
  elevation:2,
  backgroundColor:'#fff',
  
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    padding: wp("5%"),
    

  },
  passwordSubContainer:
  {
    flexDirection: "row",  
    alignItems:'center'
  },

  categortConteiner:
  {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:hp('3%'),
      
  },

  catRow1:
  {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly'


  },

  catRow2:
  {

    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop:hp('1%')
  }



})
