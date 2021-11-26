/*
* 임시 main 화면 - 수현
* */

import React from "react";
import {View, Text, Button, StyleSheet, StatusBar} from "react-native";

//temp home
const HomeScreen =({navigation}) => {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Temporary Home Screen</Text>
            <Button
                title="Go to myPage"
                onPress={() => navigation.navigate("MyPageScreen")} //myPage 연결
            />
        </View>
    );
};


export default HomeScreen;


