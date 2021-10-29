import React, {useState, useEffect, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";

import { Context } from "../context/PersonContext";

const PersonListScreen = ({navigation}) => {
     const {state, getPersons}= useContext(Context);
             
     useEffect(()=>{
         getPersons();
     },[])

      return (
     <View>
         <Text>Persons List</Text>
         <FlatList
           data={state}
           keyExtractor={(person)=>person['fields']['Name']}
           renderItem={({item})=>{
              return <TouchableOpacity onPress={()=>navigation.navigate("Informations", {Name: item['fields']['Name']})}>

              <Text>{item['fields']['Name']}</Text>
              </TouchableOpacity>
           }}
         
         />
        
    </View>
    
      )
};

export default PersonListScreen;
