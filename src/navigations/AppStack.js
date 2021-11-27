
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();


const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile}/>
            {/*<Stack.Screen name="EditProfile" component={EditProfile}/>*/}
        </Stack.Navigator>
    );
};

export default StackNavigation;