import React,{ useState}  from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';
import HomeStack from "./routes/homeStack";
import {NavigationContainer} from "@react-navigation/native";
import RootDrawerNavigator from "./routes/drawer";





export default function App() {

 let [fontsLoaded] = useFonts({
   'nunito-regular': require('./assets/fonts/Nunito-Bold.ttf'),
   'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
 })

if(fontsLoaded){
  return (
      <NavigationContainer>
        {/*<HomeStack/>*/}
        <RootDrawerNavigator/>
      </NavigationContainer>

  );
} else{
return(
    <AppLoading/>
);
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
