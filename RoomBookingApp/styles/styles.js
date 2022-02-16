import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 40,
        flex: 1
    },
    heading1: {
        fontSize: 20, 
        textAlign: 'center'
    },
    eventName: {
        borderWidth: 1, 
        borderColor: 'grey', 
        padding: 10, 
        marginTop: 20, 
        marginBottom: 20
    },
    datePicker: {
        color: 'black', 
        fontSize: 15,
        marginTop: 10
    },
    orgBody: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 10
    },
    orgName: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 20
    },
    mobileNum: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 20
    },
    tcdEmail: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 20
    },
    eventDesc: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 20
    },
    heading2: {
        margin: 20, 
        top: 10, 
        fontSize: 20, 
        textAlign: 'center'
    },
    submitButton: {
        marginLeft: 65,
        marginRight: 65,
        marginTop: 20,
        height: 45,
        borderRadius: 0,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#308ce8'
    },
    submitButtonText: {
        fontSize: 20,
        color: 'white'
    }
})