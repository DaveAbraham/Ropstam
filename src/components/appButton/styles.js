import {PixelRatio, Platform, StyleSheet} from "react-native";
import {LAYOUT} from "../../layout";

export const styles = StyleSheet.create({
    button: {
        width: "100%",
        height:"100%" ,
        margin: 10,
        justifyContent: 'center',
        borderRadius: 9,
    },
    btnLabel: {
        color: LAYOUT.COLORS.S1,
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily:LAYOUT.FONTS.SEMI_BOLD


    },
    container: {
        alignSelf:"center",
        alignItems: 'center',
        justifyContent:"center",
        borderRadius: 9,
        height: PixelRatio.roundToNearestPixel(LAYOUT.HEIGHT / 19),
        width: LAYOUT.WIDTH - 40,
        marginVertical:10
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
