// import App from './src/App';
// export default App;

/*
* 임시 main 화면 - 수현
* */

import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer";

import HomeScreen from '../screens/HomeScreen';
import MyPageScreen from '../screens/MyPageScreen';
import {DrawerContent} from './screens/DrawerContent';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App =()=> {
    return(
        //오른쪽으로 밀면 나오는 navigator
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={MyPageScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;

