import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { AntDesign } from "@expo/vector-icons";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import CityPicker2 from "../Components/CityPicker2";
import DobPicker from "../Components/DobPicker";
import GenderBox from "../Components/GenderBox";

//GenderImages

import male from "../assets/icons/male2.png";
import female from "../assets/icons/female2.png";

export default function SignUpScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");
  const [pass, setPass] = useState("");

  const [loaded] = useFonts({
    MoskMedium500: require("../assets/fonts/MoskMedium500.ttf"),
    MoskBold700: require("../assets/fonts/MoskBold700.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      style={styles.loginBackgroundImage}
      source={require("../assets/backgroundImage.png")}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />
      <Image source={require("../assets/logo.png")} style={styles.logoImage2} />

      <View style={styles.signupCardContainer}>
        <View style={styles.topTextContainer}>
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.signIn}
          >
            Sign in
          </Text>

          <View>
            <Text style={styles.signUp}>Sign Up</Text>
            <View style={styles.signinLine} />
          </View>
        </View>

        <View style={styles.inputsMainContainer}>
          <View style={styles.nickNameContainer}>
            <View style={styles.nickNameSubContainer}>
              <Image source={require("../assets/icons/nickname.jpg")} />

              <TextInput
                keyboardType="email-address"
                style={styles.inputMail}
                placeholder="Nickname"
                placeholderTextColor="#707070"
                onChangeText={(text) => setMail2(text)}
                defaultValue={mail2}
              />
            </View>
          </View>

          <View style={styles.emailContainer}>
            <View style={styles.emailSubContainer}>
              <Image source={require("../assets/icons/mail.jpg")} />

              <TextInput
                keyboardType="email-address"
                style={styles.inputMail}
                placeholder="Email address"
                placeholderTextColor="#707070"
                onChangeText={(text) => setMail(text)}
                defaultValue={mail}
              />
            </View>
          </View>

          <View style={styles.passwordContainer}>
            <View style={styles.passwordSubContainer}>
              <Image source={require("../assets/icons/lock.jpg")} />

              <TextInput
                keyboardType="numbers-and-punctuation"
                secureTextEntry={true}
                style={styles.inputpass}
                placeholder="Password"
                placeholderTextColor="#707070"
                onChangeText={(text) => setPass(text)}
                defaultValue={pass}
              />

              <Image
                style={{
                  marginHorizontal: wp("-15%"),
                  alignSelf: "center",
                  borderRadius: 10,
                }}
                source={require("../assets/icons/eye.jpg")}
              />
            </View>
          </View>

          <View style={styles.passwordContainer}>
            <View style={styles.passwordSubContainer}>
              <Image source={require("../assets/icons/city.jpg")} />

              <CityPicker2 color="#000" />
            </View>
          </View>

          <View style={styles.dobContainer}>
            <View style={styles.dobSubContainer}>
              <Image source={require("../assets/icons/Calendar.jpg")} />

              <DobPicker />
            </View>
          </View>

          <View style={styles.genderContainer}>
            <GenderBox title="Male" male={male} />

            <GenderBox title="Female" male={female} />
          </View>
        </View>

        <View style={styles.socialMainContainer}>
          <View style={styles.socialContainer}>
            <Image source={require("../assets/icons/google.jpg")} />
          </View>

          <View style={styles.socialContainer}>
            <Image source={require("../assets/icons/facebook.jpg")} />
          </View>

          <View style={styles.socialContainer}>
            <Image source={require("../assets/icons/twitter.jpg")} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.cardBottomCircle}
          onPress={() => navigation.navigate("InterestsScreen")}
        >
          <AntDesign name="arrowright" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginBackgroundImage: {
    width: wp("100%"),
    height: hp("100%"),
    opacity: 0.9,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-evenly",
  },

  logoImage2: {
    width: wp("60%"),
    height: hp("10.5%"),
    alignSelf: "center",
  },

  signupCardContainer: {
    width: wp("85%"),
    height: hp("68%"),
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    bottom: hp("2%"),
  },
  topTextContainer: {
    flexDirection: "row",
    padding: hp("3%"),
    alignItems: "center",
    marginBottom: hp("-1.5%"),
  },
  signUp: {
    fontSize: 18,
    fontFamily: "MoskBold700",
  },

  signinLine: {
    borderBottomWidth: 2,
    width: wp("15.5%"),
    marginVertical: hp(".5%"),
    borderBottomColor: "#7D34E3",
    fontFamily: "MoskMedium500",
  },

  signIn: {
    fontSize: 18,
    color: "#B0B6BA",
    marginRight: wp("10%"),
  },

  emailContainer: {
    width: wp("75%"),
    height: hp("7%"),
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    padding: wp("5%"),
  },
  emailSubContainer: {
    flexDirection: "row",
  },

  inputMail: {
    width: wp("70%"),
    height: hp("2.5%"),
    paddingHorizontal: wp("3%"),
  },

  passwordContainer: {
    width: wp("75%"),
    height: hp("7%"),
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    padding: wp("5%"),
    marginTop: hp("1.3%"),
  },
  passwordSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  inputpass: {
    width: wp("70%"),
    height: hp("2.5%"),
    paddingHorizontal: wp("3%"),
  },

  forgetPasswordText: {
    color: "#A77AE1",
    fontSize: 14,
    marginTop: hp("3%"),
    alignSelf: "flex-end",
    marginRight: hp("3.5%"),
  },
  inputsMainContainer: {},

  socialContainer: {
    width: 38,
    height: 37,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp("3%"),
  },
  socialMainContainer: {
    flexDirection: "row",
    padding: hp("1%"),
    alignSelf: "center",
  },
  cardBottomCircle: {
    width: 50,
    height: 50,
    borderRadius: 28,
    backgroundColor: "#7D34E3",
    alignSelf: "center",
    borderWidth: 6,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: hp("-4.8%"),
  },

  nickNameContainer: {
    width: wp("75%"),
    height: hp("7%"),
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    padding: wp("5%"),
    marginBottom: hp("1.5%"),
  },

  nickNameSubContainer: {
    flexDirection: "row",
  },
  dobContainer: {
    width: wp("75%"),
    height: hp("7%"),
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    padding: wp("5%"),
    marginTop: hp("1.3%"),
  },
  dobSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  maleContainer: {
    width: wp("35%"),
    height: hp("7%"),
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    padding: wp("5%"),
    marginTop: hp("1.3%"),
    marginLeft: 10,
  },

  maleSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  genderContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
