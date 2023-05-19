import { TextInput, Text,Image, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from "./styles";
import {LAYOUT} from "../../layout";
import Icon from "react-native-vector-icons/MaterialIcons" //"person-outline"


console.log(LAYOUT.HEIGHT,LAYOUT.WIDTH)

const TextField = ({value,icon,iconr, onChangeText,label ,keyboardType, placeholder, secureTextEntery = false, ...props}) => {
    const [secure,setSecure] = useState(true);
    const [focused,setFocused] = useState(false)

    return (

        <View style={{marginVertical:8}}>
            <Text style={styles.label}>{label}</Text>
        <View style={[styles.container,{borderColor: focused?LAYOUT.COLORS.P1:LAYOUT.COLORS.S4}]}>
            {icon?<Icon name={icon} size={20} style={styles.icon} color={LAYOUT.COLORS.S3}/>:null}

            <TextInput
                multiline={false}
                placeholderTextColor={LAYOUT.COLORS.S2}
                secureTextEntry={secure}
                style={[styles.input,{width: icon?"75%":"100%"}]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholder={placeholder}
                onFocus={()=>setFocused(true)}
                onBlur={()=>setFocused(false)}
                {...props}
            />
            {iconr?<Icon onPress={()=>setSecure(!secure)} name={secure?"visibility":"visibility-off"} size={20} style={styles.iconr} color={LAYOUT.COLORS.S3} />:null}
        </View>
        </View>



    );
};
export default TextField;
