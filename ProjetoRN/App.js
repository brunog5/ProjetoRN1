import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Inicial from './src/views/Inicial/Inicial';
import Perfil from './src/views/Perfil/Perfil';
import Lista from './src/views/Lista/Lista';
import estiloInicial from './src/views/Inicial/estiloInicial';

const Stack = createStackNavigator();

export default function App() {
  return (
            <NavigationContainer>
                <StatusBar barStyle="light-content" backgroundColor= '#319CCD'/>

               <Stack.Navigator>
                   <Stack.Screen name="Inicial" component={Inicial} options={{
                       cardStyle: styles.screenInicial,
                       headerStyle: {backgroundColor:'#75C0E0'},
                       headerTintColor: '#0000000',
                   }}
                   />

                   <Stack.Screen name="Perfil" component={Perfil} options={{
                       cardStyle: styles.screenPerfil,
                       headerStyle: {backgroundColor: '#75C0E0'},
                       headerTintColor: '#000000',
                   }}
                   />

                   <Stack.Screen name="Lista" component={Lista} options={{
                       cardStyle: styles.screenLista,
                       headerStyle: {backgroundColor: '#75C0E0'},
                       headerTintColor: '#000000',
                       
                   }}
                   />
               </Stack.Navigator> 
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
 screenInicial:{
     backgroundColor: '#FFF9C4'
 
  },
  screenPerfil: {
      backgroundColor: '#FFF9C4'
  },
  screenLista: {
      backgroundColor: '#FFF9C4'
  },
});
