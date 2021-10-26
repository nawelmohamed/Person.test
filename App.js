import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import PersonListScreen from "./src/Screens.js/PersonsListScreen";
import PersonInformationsScreen from "./src/Screens.js/PersonInformationsScreen";
import { Provider } from "./src/context/PersonContext";
const navigator = createStackNavigator ({
  List: PersonListScreen,
  Informations: PersonInformationsScreen
}, {
  initialRouteName:'List',
  defaultNavigationOptions:{
    title: 'Persons'
  }
}
);
 
const App = createAppContainer(navigator);
export default () => {
  return (
   <Provider>
     <App/>
    </Provider>
  )
};