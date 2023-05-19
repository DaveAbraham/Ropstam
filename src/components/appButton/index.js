import {StyleSheet, TouchableOpacity, ActivityIndicator, Platform, Text, View} from 'react-native';
import React from 'react';
import {LAYOUT} from '../../layout';
import {styles} from "./styles";

const AppButton = ({style,textTransform,onPress, label, color, isLoading = false,labelColour, disabled}) => {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity disabled={disabled} onPress={onPress}
                              style={[styles.button, {backgroundColor: color ? color : 'green'}, {style}]}>
                <View style={styles.innerContainer}>
                    {isLoading && <ActivityIndicator color={"#fff"} size={"small"}/>}
                    <Text style={[styles.btnLabel,{textTransform:textTransform?textTransform:"uppercase"}, labelColour]}>{label}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default AppButton;
