import React from 'react'
import { ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial ({ navigation }) {

    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }

    const abrirLista = () => {
        navigation.navigate('Lista')
    }

    return (
        <View style={estiloInicial.container}>
            <ImageBackground source={require('../../../assets/imagens/1.jpg')} style={estiloInicial.fundo}>
                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                    <Text style={estiloInicial.botaoTexto}>Perfil</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirLista}>
                    <Text style={estiloInicial.botaoTexto}>Lista</Text> 
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
export default Inicial;