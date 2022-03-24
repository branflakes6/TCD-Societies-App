import { StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 20,
        flex: 1,
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#000',
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
    datetimeButton: {
        marginTop: 10,
        padding: 5,
        backgroundColor: '#0569b9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    },
    input: {
        marginTop: 10,
        color: '#fff',
    },
    picker: {
        marginTop: 15,
        color: '#fff',
        backgroundColor: '#0569b9',
    },

});

