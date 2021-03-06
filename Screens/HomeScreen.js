import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import Header from "../Components/Header";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import HomeCard from "../Components/HomeCard";
//card images
import bella from "../assets/bella.png";
import kabab from "../assets/kababjees.png";
import tandoor from "../assets/tandoor.png";
import cafe from "../assets/cafe.png";
import spice from "../assets/spice.png";
import hardees from "../assets/hardees.png";

//star
import star from "../assets/icons/star.png";
import halfstar from "../assets/icons/halfstar.png";
import emptystar from "../assets/icons/emptystar.png";

//Hearts
import emptyheart from "../assets/icons/Heart.png";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    MoskMedium500: require("../assets/fonts/MoskMedium500.ttf"),
    MoskBold700: require("../assets/fonts/MoskBold700.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />
      <Header />

      <ScrollView style={{ zIndex: -5 }} showsVerticalScrollIndicator={false}>
        {/* First Cards rows */}
        <View>
          <Text style={styles.Recomend}>Recommended for you</Text>

          <ScrollView
            style={{ marginTop: hp("-5%") }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
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
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
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
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
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
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
              />
            </View>
          </ScrollView>
        </View>

        {/* Second Cards rows */}
        <View>
          <Text style={styles.othersLike}>What others like</Text>

          <ScrollView
            style={{ marginTop: hp("0%") }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.cardFirstRow}>
              <HomeCard
                image={tandoor}
                title="Tandoor"
                star1={star}
                star2={star}
                star3={star}
                star4={star}
                star5={emptystar}
                subTitle1="Khayaban shahbaz (Karachi)"
                subTitle2="Burgers Beverage Italian American Fast Food"
                heart={emptyheart}
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
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
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
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
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
              />
            </View>
          </ScrollView>
        </View>

        {/* Third Cards rows */}

        <View>
          <Text style={styles.othersLike}>Near to you</Text>

          <ScrollView
            style={{ marginTop: hp("0%") }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.cardFirstRow}>
              <HomeCard
                image={spice}
                title="Spice"
                star1={star}
                star2={star}
                star3={star}
                star4={star}
                star5={emptystar}
                subTitle1="Khayaban shahbaz (Karachi)"
                subTitle2="Burgers Beverage Italian American Fast Food"
                heart={emptyheart}
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
              />

              <HomeCard
                image={hardees}
                title="Hardees"
                star1={star}
                star2={star}
                star3={star}
                star4={star}
                star5={emptystar}
                subTitle1="Khayaban shahbaz (Karachi)"
                subTitle2="Burgers Beverage Italian American Fast Food"
                heart={emptyheart}
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
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
                onPress2={() =>
                  navigation.navigate("ActivityInformationScreen")
                }
              />
            </View>
          </ScrollView>
        </View>
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
    marginVertical: wp("10%"),
    marginHorizontal: wp("7%"),
  },

  cardFirstRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    padding: wp("4%"),
  },

  othersLike: {
    fontFamily: "MoskBold700",
    color: "#8338EB",
    fontSize: 16,
    marginVertical: wp("0%"),
    marginHorizontal: wp("7%"),
  },
});
