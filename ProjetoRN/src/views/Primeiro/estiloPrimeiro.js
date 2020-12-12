import { StyleSheet} from 'react-native';

const estiloPrimeiro = StyleSheet.create({
    areaItens: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#319CCD',
    },

    itemFoto: {
        marginTop: 5,
        width: 140,
        height: 140,
        borderRadius: 200,
        borderColor: '#FFFFFF',
        borderWidth: 3,
    },
    texto: {
        padding: 10,
        height: 40,
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    titulo: {
        padding: 20,
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
    },
});
export default estiloPrimeiro;