import React, {useState} from 'react';
import { Text, View, Image} from 'react-native';
import estiloPrimeiro from './estiloPrimeiro';

const Primeiro = ({data}) => {
    const [item, setItem] = useState(data);

    return (
        <View style={estiloPrimeiro.areaItens}>
            <Text style={estiloPrimeiro.titulo}> {item.titulo}</Text>

            <Image source={item.foto} style={estiloPrimeiro.itemFoto}/>
            <Text style={estiloPrimeiro.texto}>{item.nome}</Text>
            <Text style={estiloPrimeiro.texto}>{item.idade}</Text>
            <Text style={estiloPrimeiro.texto}>{item.sala}</Text>

            <Image source={item.foto1} style={estiloPrimeiro.itemFoto}/>
            <Text style={estiloPrimeiro.texto}>{item.nome1}</Text>
            <Text style={estiloPrimeiro.texto}>{item.idade1}</Text>
            <Text style={estiloPrimeiro.texto}>{item.sala1}</Text>
        </View>

    );
}
export default Primeiro;