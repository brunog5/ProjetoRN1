import React, {useState} from 'react';
import { Text, View, FlatList } from 'react-native';
import estiloLista from './estiloLista';
import Segundo from '../Segundo/Segundo';

function Lista ({ navigation }) {
    const [lista, setLista] = useState ( [
        {
            id: '1',
            titulo: 'Lista dos Professores',
            foto: require('../../../assets/imagens/4.jpg'),
            nome: 'Ralfe Della',

            foto2: require('../../../assets/imagens/5.jpg'),
            nome2: 'Priscila Batista',

            foto3: require('../../../assets/imagens/6.jpg'),
            nome3: 'Robson Rodrigues',

            foto4: require('../../../assets/imagens/7.jpg'),
            nome4: 'Jacqueline Santos',

        },
                                            ]);
      const voltar = () => {
          navigation.goBack('Inicial');
      }

      return (
          <View style={estiloLista.container}>
              <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item)=> item.id }
              data={lista}
              renderItem={ ({item}) => <Segundo data={item}/>}
              />
          </View>
      )
}
export default Lista;