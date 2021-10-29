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
         <Text style={styles.title}>Persons List</Text>
         <FlatList
           data={state}
           keyExtractor={(person)=>person['id']}
           renderItem={({item})=>{
              return <TouchableOpacity onPress={()=>navigation.navigate("Informations", {id: item['fields']['Name']})}>
                  <View style={styles.row}>
                    <Text>{item['fields']['Name']}</Text>
                  </View>
              </TouchableOpacity>
           }}
         
         />
        
    </View>
    
      )
};
const styles= StyleSheet.create ({
  row: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 20,
      borderWidth: 1,
      borderColor: "gray"
  },
  title: {
      fontSize: 18,
      fontWeight:'bold',
      textAlign:'center'
  },
  

});

export default PersonListScreen;
