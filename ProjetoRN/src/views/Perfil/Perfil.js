import React, {useState} from 'react';
import { Text, View, FlatList} from 'react-native';
import estiloPerfil from './estiloPerfil';
import Primeiro from '../Primeiro/Primeiro';

function Perfil ({navigation}) {

    const [perfil, setPerfil] = useState ([
        {
            id:'1',
            titulo: 'Perfil Alunos',
            foto: require('../../../assets/imagens/2.jpg'),
            nome: 'Beatriz Ribas',
            idade: '18 anos',
            sala: '3º MI-A',

            foto1: require('../../../assets/imagens/3.jpg'),
            nome1: 'Bruno Gomes',
            idade1: '17 anos',
            sala1: '3° MI-A'
        },
                                            ])

        const voltar = () => {
            navigation.goBack('Inicial');
        }
        return (
            <View style={estiloPerfil.container}>

                    <FlatList 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item)=> item.id}
                    data={perfil}
                    renderItem={ ({item})=> <Primeiro data={item}/>}
               />

            </View>
        )
}
export default Perfil;