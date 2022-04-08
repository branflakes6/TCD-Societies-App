import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 40,
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#f4511e',
    },
    infoText: {
        margin: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#f4511e',
    },
    appLogo: {
        width: 200,
        height: 200,
        marginTop: 10,
        flex: 1,
        alignSelf: 'center',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f4511e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 10
    }
});