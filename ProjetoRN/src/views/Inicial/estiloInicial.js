import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    fundo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#319CCD',
    },
    borda: {
        backgroundColor: '#F57F17',
        width: '80%',
        height: '50%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: '#000000',
        textAlign: "center",
        padding: 10,
    },
    botaoContainer: {
        width: 150,
        height: '10%',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#75C0E0',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
    },
});
export default estiloInicial;