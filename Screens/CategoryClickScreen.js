import React,{useState} from 'react'
import { StyleSheet, TextInput,Image, View,Platform,StatusBar,TouchableWithoutFeedback ,SafeAreaView,Text} from 'react-native'
import Header from '../Components/Header'




import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";



//card images
import bella from '../assets/bella.png'
import kabab from '../assets/kababjees.png'
import tandoor from '../assets/tandoor.png'
import cafe from '../assets/cafe.png'
import spice from '../assets/spice.png'
import hardees from '../assets/hardees.png'



//star
import star from '../assets/icons/star.png'
import halfstar from '../assets/icons/halfstar.png'
import emptystar from '../assets/icons/emptystar.png'

//Hearts
import emptyheart from '../assets/icons/Heart.png'
import { ScrollView } from 'react-native-gesture-handler';
import HomeCard from '../Components/HomeCard';


export default function CategoryClickScreen({navigation,route}) {
    const {title} =route.params;

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
      placeholder="Search Resturent"
      placeholderTextColor="#707070"
      onChangeText={(text) => setPass(text)}
      defaultValue={pass}
    />

      <Image style={{
      alignSelf:'center',}} source={require('../assets/icons/modal.png')} />


         </View>
        </View>

         


      <ScrollView style={{zIndex:-5,}} showsVerticalScrollIndicator={false}>
         <View>
         <View style={styles.titleContainer}>
              
              <TouchableWithoutFeedback onPress={()=>navigation.navigate('GeneralCategoryScreen')}>
             <Image  source={require('../assets/icons/backArrow.png')}/>
             </TouchableWithoutFeedback>

        <Text  style={styles.Recomend}>{title}</Text>

         </View>
            <ScrollView style={{marginTop:hp('-5%')}}   horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardFirstRow}>
           
                <HomeCard
                 image={bella}
                 title="Bella Vita"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />

                <HomeCard 
                 image={kabab}
                 title="Kababjees"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />
                <HomeCard 
                 image={bella}
                 title="Bella Vita"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />
               
               
            </View>
            </ScrollView>
            </View>




          {/* Second Cards rows */}
            <View>
            
           
            <ScrollView style={{marginTop:hp('0%')}}   horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardFirstRow}>
           
                <HomeCard 
                 image={tandoor}
                 title="Tandoor"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />

                <HomeCard 
                 image={cafe}
                 title="Cafe Bogie"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />
                <HomeCard 
                 image={bella}
                 title="Bella Vita"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />
               
               
            </View>
            </ScrollView>
            </View>
          

           {/* Third Cards rows */}


           <View>
           
           
            <ScrollView style={{marginTop:hp('0%')}}   horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardFirstRow}>
           
                <HomeCard 
                 image={spice}
                 title="Spice"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />

                <HomeCard 
                 image={hardees}
                 title="Hardees"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />
                <HomeCard 
                 image={bella}
                 title="Bella Vita"
                 star1={star}
                 star2={star}
                 star3={star}
                 star4={star}
                 star5={halfstar}
                 subTitle1="Khayaban shahbaz (Karachi)"
                 subTitle2="Burgers Beverage Italian American Fast Food"
                 heart={emptyheart}
                />
               
               
            </View>
            </ScrollView>
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
   paddingTop:Platform.OS==='android' ? StatusBar.currentHeight :0
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
      marginLeft:wp('3%'),
      
      
   
  },

  titleContainer:
  {
      flexDirection:'row',
      marginHorizontal:wp('5%'),
      marginVertical:hp('4%'),
      bottom:hp('1.3%')
      
  },

  cardFirstRow:
{
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'flex-start',
  padding:wp('4%'),
  
},

othersLike:
{
  fontFamily:"MoskBold700",
    color:"#8338EB",
    fontSize:16,
    marginVertical:wp('0%'),
    marginHorizontal:wp('7%')

}

})
