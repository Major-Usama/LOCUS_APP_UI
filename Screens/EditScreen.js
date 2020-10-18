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
  TouchableHighlight,
} from "react-native";

import GenderBox from "../Components/GenderBox";
import CityPicker2 from "../Components/CityPicker2";
import DobPicker from "../Components/DobPicker";
import Header from "../Components/Header";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import { ScrollView } from "react-native-gesture-handler";

//Gender Boxes
import male from "../assets/icons/male2.png";
import female from "../assets/icons/female2.png";

export default function EditScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const [loaded] = useFonts({
    MoskMedium500: require("../assets/fonts/MoskMedium500.ttf"),
    MoskBold700: require("../assets/fonts/MoskBold700.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.Recomend}>Edit Information</Text>
          <Image source={require("../assets/icons/edit.png")} />
        </View>

        <View style={styles.signupCardContainer}>
          <View style={styles.inputsMainContainer}>
            <View style={styles.nickNameContainer}>
              <View style={styles.nickNameSubContainer}>
                <Image source={require("../assets/icons/nickname.jpg")} />

                <TextInput
                  keyboardType="email-address"
                  style={styles.inputMail}
                  placeholder="Nickname"
                  placeholderTextColor="#707070"
                  onChangeText={(text) => setMail(text)}
                  defaultValue={mail}
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

                <CityPicker2 />
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

              <GenderBox male={female} title="Female" />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
          style={{
            width: wp("18%"),
            height: hp("4%"),
            backgroundColor: "#7D34E3",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
            marginRight: wp("8%"),
            marginTop: hp("4%"),
            marginBottom: hp("5%"),
          }}
        >
          <Text
            style={{ color: "#fff", fontFamily: "MoskMedium500", fontSize: 13 }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  Recomend: {
    fontFamily: "MoskBold700",
    color: "#8338EB",
    fontSize: 16,
    marginLeft: wp("3%"),
  },

  titleContainer: {
    flexDirection: "row",
    marginHorizontal: wp("7%"),
    marginVertical: hp("4%"),
    alignItems: "center",
    justifyContent: "space-between",
  },

  signupCardContainer: {
    width: wp("85%"),
    height: hp("60%"),
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 5,
    bottom: hp("0%"),
    justifyContent: "center",
    alignItems: "center",
  },
  topTextContainer: {
    flexDirection: "row",
    padding: hp("3%"),
    alignItems: "center",
    marginBottom: hp("-1.5%"),
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
