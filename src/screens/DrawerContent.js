//왼쪽 밀면 나오는 화면
//-> TODO: 메인화면에서 profile 누르면 나오게 수정
import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView,
        DrawerItem
} from '@react-navigation/drawer';

export function DrawerContent(props){
    return(
        <View>
            <Text>This is a DrawerContent</Text>
        </View>
    )
}
