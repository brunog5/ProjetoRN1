import React, {useState} from 'react';
import { Text, View, Image} from 'react-native';
import estiloSegundo from './estiloSegunda';

const Segundo = ({data}) => {
    const [item,setItem] = useState(data);

    return (
        <View style={estiloSegundo.areaItens}>
            <Text style={estiloSegundo.titulo}>{item.titulo}</Text>

            <Image source={item.foto} style={estiloSegundo.itemFoto}/>
            <Text style={estiloSegundo.texto}> {item.nome}</Text>

            <Image source={item.foto2} style={estiloSegundo.itemFoto}/>
            <Text style={estiloSegundo.texto}> {item.nome2}</Text>

            <Image source={item.foto3} style={estiloSegundo.itemFoto}/>
            <Text style={estiloSegundo.texto}> {item.nome3}</Text>

            <Image source={item.foto4} style={estiloSegundo.itemFoto}/>
            <Text style={estiloSegundo.texto}> {item.nome4}</Text>
        </View>
    );
}
export default Segundo;