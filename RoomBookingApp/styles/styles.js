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
        color: '#0569b9',
    },
    infoText: {
        margin: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
    },
    blueText: {
        margin: 0,
        fontSize: 16,
        textAlign: 'center',
        color: '#0569b9',
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
        backgroundColor: '#0569b9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginTop: 10
    }
});