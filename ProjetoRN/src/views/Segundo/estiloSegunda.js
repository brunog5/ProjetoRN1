import { StyleSheet} from 'react-native';

const estiloSegundo = StyleSheet.create({
    areaItens: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#319CCD',
    },

    itemFoto: {
        width: 150,
        height: 150,
        borderRadius: 200,
        borderColor: '#FFFFFF',
        borderWidth: 3,
        marginTop: 15,
    },
    texto: {
        height: 35,
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 10,
    },
    titulo: {
        padding: 20,
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
    },
});
export default estiloSegundo;