import React, { Component } from "react";
import { Picker, SafeAreaView, Text,View,Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from '@expo/vector-icons';

import DropDownPicker from 'react-native-dropdown-picker';

export default class CityPicker extends Component {

    state = {
      countries: ['uk'],
    
  }


  render() {
    return (
         <View style={{zIndex:Platform.OS==='ios'?10:10,}}>
              
              <DropDownPicker 
    items={[
        {label: 'UK', value: 'uk', icon: () => <Feather name="flag" size={24} color="black" />},
    {label: 'France', value: 'france', icon: () => <Feather name="flag" size={24} color="black" />},
    {label: 'Pakistan', value: 'france', icon: () => <Feather name="flag" size={24} color="black" />},
    {label: 'USA', value: 'france', icon: () => <Feather name="flag" size={24} color="black" />}
    ]}
    style={{borderRadius:25}}

    multiple={true}
    multipleText="Rriyadh"
    min={0}
    max={10}
    dropDownStyle={{marginTop:2,borderRadius:10}}
    dropDownMaxHeight={250}

    defaultValue={this.state.countries}
    containerStyle={{height: 30,width:110,}}
    itemStyle={{
        justifyContent: 'center',
        alignItems:"center"
    }}
    onChangeItem={item => this.setState({
        countries: item, // an array of the selected items
        
    })}
/>
        </View>
      
    );
  }
}
