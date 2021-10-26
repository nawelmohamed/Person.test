import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Context } from "../context/PersonContext";

const PersonInformationsScreen = () => {

    const {state}= useContext(Context)
    const person= state.find ((person)=>person.Name === navigation.getParam('Name'))
     return <View>
           <Text>{person.Name}</Text>
           <Text>{person.Adress}</Text>
           <Text>{person.Phone}</Text>
         </View>
};
const Styles= StyleSheet.create({});

export default PersonInformationsScreen;