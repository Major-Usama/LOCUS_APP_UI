import React, { Component } from "react";
import {
  AppRegistry,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,

} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Swiper from "react-native-swiper";

export default class Welcome extends Component {
  render() {
    return (
      
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>


        <ImageBackground
          source={require("../assets/backgroundImage.png")}
          style={styles.ImageBackground}
        >
          <Image
            source={require("../assets/logo.png")}
            style={styles.logoImage}
          />

          <Text style={styles.welcomeText}>
            It is a long{"\n"}established fact{"\n"}that a reader will
            {"\n"} be distracted by {"\n"}the readable
          </Text>
        </ImageBackground>

        <ImageBackground
          source={require("../assets/backgroundImage.png")}
          style={styles.ImageBackground2}
        >
          <Image
            source={require("../assets/logo.png")}
            style={styles.logoImage2}
          />

          <View>
            <View style={styles.loginButtonContainer}>
              <Text
                onPress={() => this.props.navigation.navigate("LoginScreen")}
                style={styles.loginText}
              >
                LOGIN
              </Text>
            </View>
            <Text style={styles.createAccountText}>Create a new account</Text>
          </View>
        </ImageBackground>

      </Swiper>
      
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);

const styles = StyleSheet.create({
  
  wrapper:
  {
    paddingTop:Platform.OS==='android' ?StatusBar.currentHeight :0

  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },

  ImageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  ImageBackground2: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoImage: {
    width: wp("42%"),
    height: hp("10%"),
    marginTop: hp("18%"),
    opacity: 0.9,
  },
  logoImage2: {
    width: wp("70%"),
    height: hp("10.5%"),
    opacity: 0.9,
  },
  
  welcomeText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: wp("9%"),
    opacity: 0.6,
    marginTop: hp("24%"),
  },

  loginButtonContainer: {
    width: wp("80%"),
    height: hp("8%"),
    borderRadius: 30,
    backgroundColor: "#7D34E3",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("5%"),
  },
  createAccountText: {
    alignSelf: "center",
    color: "#000",
    fontSize: wp("4.5%"),
  },
});
