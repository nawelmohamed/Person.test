import React,{useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import { Context } from "../context/PersonContext";

const PersonInformationsScreen = ({navigation}) => {

    const {state}= useContext(Context);

    const person= state.find ((person)=>person.Name === navigation.getParam('Name'))
     return <View >
           <View> 
             <Text style={styles.title}>{person['fields']['Name']} Informations</Text>
           </View>
           <View style={styles.row}>
             <View style={styles.row}> 
               <Text>Name:    {person['fields']['Name']}</Text>
              </View>
              <View style={styles.row}>   
               <Text>Adress:    {person['fields']['Adress'] }</Text>
              </View>
              <View style={styles.row}> 
               <Text>Phone:    {person['fields']['Phone'] }</Text>
              </View>
           </View>
         </View>
};
const styles= StyleSheet.create ({
  row: {
      
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
export default PersonInformationsScreen;