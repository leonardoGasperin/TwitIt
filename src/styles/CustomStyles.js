import { StyleSheet, Dimensions } from "react-native";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

export const commonStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: '60%',
        height: '30%',
        resizeMode: 'contain'
    },
    logoText:{
        color: '#1DA1F2',
    },
    labels:{
        fontWeight: 'bold',
        paddingTop: 7,
    },
    textBox:{
        width: "86%",
        paddingLeft: 7,
        marginTop: 7,

        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#f90',
    },
    TextAreaBox:{
        height: 200, 
        textAlignVertical: 'top',
    },
    rowComponents:{
        width: "74%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    button:{
        padding: 5,
        fontWeight: 'bold',
    },
    btnText:{
        fontWeight: 'bold',
    },
    confirmBtn:{
        borderRadius: 12,
        backgroundColor: 'green',
    },
    cancelBtn:{
        borderRadius: 12,
        backgroundColor: 'red',
    },
});