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
    
    list: {
        paddingHorizontal: 17,
        backgroundColor: "#E6E6E6",
    },
    separator: {
        marginTop: 10,
    },


    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: "white"
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        backgroundColor: "#EEEEEE",
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },

    /******** card components **************/
    title: {
        fontSize: 18,
        flex: 1,
    },
    description: {
        fontSize: 15,
        color: "#888",
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    time: {
        fontSize: 13,
        color: "#808080",
        marginTop: 5
    },
    icon: {
        width: 25,
        height: 25,
    },
    iconData: {
        width: 15,
        height: 15,
        marginTop: 5,
        marginRight: 5
    },
    timeContainer: {
        flexDirection: 'row'
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

});