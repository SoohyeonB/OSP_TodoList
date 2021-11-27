/*src/App.js*/

import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import StackNavigation from './navigations/AppStack';

const Container=styled.View`
    flex:1;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;

const StyledText=styled.Text`
font-size:30px;
margin-bottom:10px;
`
const App =()=>{
    return (
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    );
};

//스타일 연결
// const App =({navigation})=>{
//     return (
//         <View style={styles.container}>
//             <Button
//                 title="Go to Profile screen"
//                 onPress={() => navigation.navigate("Profile")}
//             />
//         </View>
//         //     <Container>
//         //     <StyledText>main</StyledText>
//         //     <Button title="go to the profile Screen"
//         //     onPress={() => navigation.navigate('Profile')}/>
//         // </Container>
//     );
// };

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});