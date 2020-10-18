import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  Modal,
  Alert,
  TouchableHighlight,
} from "react-native";
import Header from "../Components/Header";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import ActivityCard from "../Components/ActivityCard";

import Boy from "../assets/boy.png";
import Girl from "../assets/girl.png";

//card images
import bella from "../assets/bella.png";

//star
import star from "../assets/icons/star.png";
import halfstar from "../assets/icons/halfstar.png";

//Hearts
import emptyheart2 from "../assets/icons/Heart2.png";
import { ScrollView } from "react-native-gesture-handler";
import RatingsCard from "../Components/RatingsCard";

export default function ActivityInformationScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loaded] = useFonts({
    MoskMedium500: require("../assets/fonts/MoskMedium500.ttf"),
    MoskBold700: require("../assets/fonts/MoskBold700.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: hp("-5%"), zIndex: -1 }}
      >
        <View style={styles.titleContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image source={require("../assets/icons/backArrow.png")} />
          </TouchableWithoutFeedback>

          <Text style={styles.Recomend}>Activity Information</Text>
        </View>

        <ActivityCard
          image={bella}
          title="Kabab Jees"
          star1={star}
          star2={star}
          star3={star}
          star4={star}
          star5={halfstar}
          subTitle1="Khayaban shahbaz (Karachi)"
          subTitle2="Price Range"
          heart={emptyheart2}
        />

        <Text style={styles.pictures}>Pictures</Text>

        <View style={styles.picMainContainer}>
          <View style={styles.picFirstRow}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                style={styles.image1}
                source={require("../assets/bella.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                style={styles.image1}
                source={require("../assets/cafe.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.pic2ndRow}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                style={styles.image1}
                source={require("../assets/kababjees.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                style={styles.image1}
                source={require("../assets/hardees.png")}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.review}>Reviews</Text>

          <RatingsCard title="Maxime Barbosa" image={Boy} />
          <RatingsCard title="Marie Winter" image={Girl} />
        </View>
      </ScrollView>

      <View style={styles.modalContainer}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={{
                  width: wp("92%"),
                  height: hp("50%"),
                  resizeMode: "contain",
                  marginLeft: wp("2.5%"),
                }}
                source={require("../assets/bella.png")}
              />

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Minimize</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
  },

  Recomend: {
    fontFamily: "MoskBold700",
    color: "#8338EB",
    fontSize: 16,
    marginLeft: wp("3%"),
  },

  titleContainer: {
    flexDirection: "row",
    marginHorizontal: wp("5%"),
    marginVertical: hp("5.5%"),
    bottom: hp("-3.5%"),
  },

  pictures: {
    fontFamily: "MoskBold700",
    color: "#8338EB",
    fontSize: 16,
    marginLeft: wp("6%"),
    marginTop: hp("2%"),
  },

  picFirstRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  pic2ndRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp("2%"),
    paddingBottom: hp("10%"),
  },

  image1: {
    width: wp("40%"),
    height: hp("15%"),
    borderRadius: 10,
  },
  picMainContainer: {
    padding: hp("3%"),
  },
  review: {
    fontFamily: "MoskBold700",
    color: "#8338EB",
    fontSize: 16,
    marginLeft: wp("6%"),
    bottom: wp("16%"),
  },

  ratingsContainer: {
    width: wp("90%"),

    elevation: 3,
    backgroundColor: "#fff",
    bottom: hp("5%"),
    borderRadius: 10,
    paddingBottom: hp("5%"),
  },
  modalView: {
    marginTop: hp("20%"),
    width: wp("90%"),
    alignSelf: "center",
    backgroundColor: "white",

    borderRadius: 20,
    height: hp("50%"),
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: hp("-2.5%"),
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
